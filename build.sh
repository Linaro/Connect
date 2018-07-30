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
# For Dockerfile development, date stamps are helpful
# DOCKER_TAGS="linaro/connect:$DATETIME"
DOCKER_TAGS="linaro/connect:latest"
	export DOCKER_TAGS
DOCKER_HOSTNAME="$(hostname)-connect-builder"
	export DOCKER_HOSTNAME
BUILD_DIR="$PWD"
	export BUILD_DIR
GEM_HOME="/srv/gems"
	export GEM_HOME

function _re_build_docker_image() {
    docker build --label "$DOCKERLABEL" --memory "$DOCKER_MEM_LIMIT" --rm -t "$DOCKER_TAGS" ./
}

function docker_local_gem_install() {
    docker run --rm -t -i --cpus="$DOCKER_RUN_CPU_COUNT" -e GEM_HOME="$GEM_HOME" -v "$(pwd)":/srv --hostname="$DOCKER_HOSTNAME" "$DOCKER_TAGS" bundle install
}
function docker_build_site() {
    docker run --rm -t -i --cpus="$DOCKER_RUN_CPU_COUNT" -e GEM_HOME="$GEM_HOME" -v "$(pwd)":/srv --hostname="$DOCKER_HOSTNAME" "$DOCKER_TAGS" jekyll build
}

# Build Docker iamge, rebuilding if necessary
printf "Building Docker image %s" "$DOCKER_TAGS"
_re_build_docker_image

# Locally install gems
docker_local_gem_install

# # Build Jekyll site
# docker_build_site

# exit 0
