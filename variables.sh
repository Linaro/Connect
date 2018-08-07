#!/bin/bash
# 2018-08-02 Ciaran Moran: Initial version

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
JEKYLL_PORT="4000"
	export JEKYLL_PORT
JEKYLL_SITE_INPUT_DIRECTORY="site_source"
	export JEKYLL_SITE_INPUT_DIRECTORY
JEKYLL_SITE_OUTPUT_DIRECTORY="site_dest"
	export JEKYLL_SITE_OUTPUT_DIRECTORY
GEM_HOME="/srv/.gemfiles"
	export GEM_HOME
MY_USERID="$(id -u)"
	export MY_USERID
MY_GROUPID="$(id -g)"
	export MY_GROUPID
