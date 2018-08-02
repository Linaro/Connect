#!/bin/bash
# 2018-04-31 Ciaran Moran: Initial version

# Enable debug
set -x
# Exit on any error
set -e

# Environment variables
DOCKERLABEL="Ruby environment for building connect.linaro.org"
	export DOCKERLABEL
DOCKER_MEM_LIMIT="1GB"
	export DOCKER_MEM_LIMIT
# Support 1-n CPU configurations, but still limit CPU to max. 85% utilisation. See:
# https://docs.docker.com/config/containers/resource_constraints/#configure-the-default-cfs-scheduler
DOCKER_RUN_CPU_PERIOD="$(( 100 * 1000))" # (in milliseconds)
	export DOCKER_RUN_CPU_PERIOD
DOCKER_RUN_CPU_QUOTA="$(( 85 * 1000))" # (in milliseconds)
	export DOCKER_RUN_CPU_PERIOD
DOCKER_IMAGE_NAME="linaro/connect"
	export DOCKER_IMAGE_NAME
DOCKER_IMAGE_VERSION="$(git rev-parse --short HEAD)"
	export DOCKER_IMAGE_VERSION
# Alternative version string:
# DOCKER_IMAGE_VERSION="$(git log -1 --pretty=%H)"
# 	export DOCKER_IMAGE_VERSION
DOCKER_TAG="$DOCKER_IMAGE_NAME:$DOCKER_IMAGE_VERSION"
	export DOCKER_TAG
DOCKER_HOSTNAME="$(hostname)-connect-builder"
	export DOCKER_HOSTNAME
BUILD_DIR="$PWD"
	export BUILD_DIR
GEM_HOME="/srv/.gemfiles"
	export GEM_HOME
JEKYLL_PORT="4000"
	export JEKYLL_PORT
JEKYLL_SITE_BUILD_DIR="_site"
	export JEKYLL_SITE_BUILD_DIR

function _re_build_docker_image() {
	docker build --rm --label "$DOCKERLABEL" --memory "$DOCKER_MEM_LIMIT" --rm -t "$DOCKER_TAG" ./
}
function docker_local_gem_install() {
	docker run \
	--rm \
	-t \
	-i \
	--cpu-period="$DOCKER_RUN_CPU_PERIOD" \
	--cpu-quota="$DOCKER_RUN_CPU_QUOTA" \
	-e GEM_HOME="$GEM_HOME" \
	-e HOME=/srv \
	-e LC_ALL=en_US.UTF-8 \
	-e LANG=en_US.UTF-8 \
	-v /etc/passwd:/etc/passwd:ro \
	-v /etc/group:/etc/group:ro \
	-u "$(id -u)":"$(id -g)" \
	-w /srv \
	-v "$(pwd)":/srv \
	--hostname="$DOCKER_HOSTNAME" \
	"$DOCKER_TAG" \
	bundle install
}
function docker_build_site() {
	docker run \
	--rm \
	-t \
	-i \
	--cpu-period="$DOCKER_RUN_CPU_PERIOD" \
	--cpu-quota="$DOCKER_RUN_CPU_QUOTA" \
	-e GEM_HOME="$GEM_HOME" \
	-e HOME=/srv \
	-e LC_ALL=en_US.UTF-8 \
	-e LANG=en_US.UTF-8 \
	-v /etc/passwd:/etc/passwd:ro \
	-v /etc/group:/etc/group:ro \
	-u "$(id -u)":"$(id -g)" \
	-w /srv -v "$(pwd)":/srv \
	--hostname="$DOCKER_HOSTNAME" \
	"$DOCKER_TAG" \
	bundle exec jekyll build --verbose
}
function docker_serve_site() {
	docker run \
	--rm \
	-t \
	-i \
	--cpu-period="$DOCKER_RUN_CPU_PERIOD" \
	--cpu-quota="$DOCKER_RUN_CPU_QUOTA" \
	-e GEM_HOME="$GEM_HOME" \
	-e HOME=/srv \
	-v /etc/passwd:/etc/passwd:ro \
	-v /etc/group:/etc/group:ro \
	-u "$(id -u)":"$(id -g)" \
	-w /srv \
	-v "$(pwd)":/srv \
	--hostname="$DOCKER_HOSTNAME" \
	-p "$JEKYLL_PORT":"$JEKYLL_PORT" \
	"$DOCKER_TAG" \
	bundle exec jekyll serve --skip-initial-build -H 0.0.0.0 -P "$JEKYLL_PORT"
}

# Build Docker image, rebuilding if necessary
printf "Building Docker image %s" "$DOCKER_IMAGE_NAME"
_re_build_docker_image

# Install gems to build directory
echo "Installing Gems"
docker_local_gem_install

# Test site build dir exists
if [ -d "$JEKYLL_SITE_BUILD_DIR" ] ; then
	printf 'Jekyll output directory "%s" already exists.
Enter "y" (without quotes) within the next 5 seconds if you want to rebuild this site\n' "$JEKYLL_SITE_BUILD_DIR"
	# Default user_approval to "n":
	read -N 1 -r -s -t 5 user_approval || true
	if [[ "$user_approval" =~ ^[Yy]$ ]] ; then
		# Build Jekyll site
		echo "Building Jekyll site"
		docker_build_site
	else
		echo "user_approval: $user_approval"
		echo "Skipping site rebuild"
	fi
else
	echo "Building Jekyll site"
	docker_build_site
fi

# Serve Jekyll site
echo "Serving Jekyll site"
docker_serve_site

exit 0
