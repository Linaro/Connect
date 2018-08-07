#!/bin/bash
# 2018-08-02 Ciaran Moran: Initial version

# Environment variables
# Stop shellcheck warning about includes: helps with IDE integration
# shellcheck disable=SC1091
source variables.sh

# Functions
function _re_build_docker_build_image() {
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
	-u "$MY_USERID":"$MY_GROUPID" \
	-v "$(pwd)":/srv \
	-w "/srv/$JEKYLL_SITE_INPUT_DIRECTORY" \
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
	-u "$MY_USERID":"$MY_GROUPID" \
	-v "$(pwd)":/srv \
	-w "/srv/$JEKYLL_SITE_INPUT_DIRECTORY" \
	--hostname="$DOCKER_HOSTNAME" \
	"$DOCKER_TAG" \
	bundle exec \
		jekyll build --verbose \
		--source "/srv/$JEKYLL_SITE_INPUT_DIRECTORY" \
		--destination "../$JEKYLL_SITE_OUTPUT_DIRECTORY"
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
	-u "$MY_USERID":"$MY_GROUPID" \
	-v "$(pwd)":/srv \
	-w "/srv/$JEKYLL_SITE_INPUT_DIRECTORY" \
	--hostname="$DOCKER_HOSTNAME" \
	-p "$JEKYLL_PORT":"$JEKYLL_PORT" \
	"$DOCKER_TAG" \
	bundle exec \
		jekyll serve \
		--skip-initial-build \
		--destination "/srv/$JEKYLL_SITE_OUTPUT_DIRECTORY" \
		-H 0.0.0.0 \
		-P "$JEKYLL_PORT"
}
