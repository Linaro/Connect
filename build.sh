#!/bin/bash
# 2018-04-27T1228 Ciaran Moran: Initial version

# Enable debug
set -x
# Exit on any error
set -e

# Environment variables
DATETIME="$(date --iso-8601)"
	export DATETIME
DOCKERLABEL="Ruby environment for building connect.linaro.org"
	export DOCKERLABEL
DOCKER_MEM_LIMIT="1GB"
	export DOCKER_MEM_LIMIT
# Allow 'docker run to use 75% CPU count
DOCKER_RUN_CPU_COUNT="4"
    export DOCKER_RUN_CPU_COUNT
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

function _re_build_docker_image() {
    docker build --rm --label "$DOCKERLABEL" --memory "$DOCKER_MEM_LIMIT" --rm -t "$DOCKER_TAG" ./
}

function docker_local_gem_install() {
    docker run --rm \
	-t \
	-i \
	--cpus="$DOCKER_RUN_CPU_COUNT" \
	-e GEM_HOME="$GEM_HOME" \
	-e HOME=srv \
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
	--cpus="$DOCKER_RUN_CPU_COUNT" \
	-e GEM_HOME="$GEM_HOME" \
	-e HOME=srv \
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
	--cpus="$DOCKER_RUN_CPU_COUNT" \
	-e GEM_HOME="$GEM_HOME" \
	-e HOME=srv \
	-v /etc/passwd:/etc/passwd:ro \
	-v /etc/group:/etc/group:ro \
	-u "$(id -u)":"$(id -g)" \
	-w /srv \
	-v "$(pwd)":/srv \
	--hostname="$DOCKER_HOSTNAME" \
	-P \
	"$DOCKER_TAG" \
	bundle exec jekyll serve --port "$JEKYLL_PORT" --verbose
}

# Build Docker iamge, rebuilding if necessary
printf "Building Docker image %s" "$DOCKER_IMAGE_NAME"
_re_build_docker_image

# Locally install gems
docker_local_gem_install

# Build Jekyll site
docker_build_site

# Serve Jekyll site
docker_serve_site

exit 0
