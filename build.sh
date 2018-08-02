#!/bin/bash
# 2018-08-02 Ciaran Moran: Initial version

# Enable debug
set -x
# Exit on any error
set -e

# Environment variables
# Stop shellcheck warning about includes: helps with IDE integration
# shellcheck disable=SC1091
source variables.sh

# Functions
# shellcheck disable=SC1091
source functions.sh

# Build Docker image, rebuilding if necessary
printf "Building Docker image %s" "$DOCKER_IMAGE_NAME"
_re_build_docker_build_image

# Install gems to build directory
echo "Installing Gems"
docker_local_gem_install

# Test site build dir exists
if [ -d "$JEKYLL_SITE_OUTPUT_DIRECTORY" ] ; then
	printf 'Jekyll output directory "%s" already exists.
Enter "y" (without quotes) within the next 5 seconds if you want to rebuild this site\n' "$JEKYLL_SITE_OUTPUT_DIRECTORY"
	# Default user_approval to "n":
	read -N 1 -r -s -t 5 user_approval || true
	if [[ "$user_approval" =~ ^[Yy]$ ]] ; then
		# Build Jekyll site
		echo "Jekyll site build: starting"
		docker_build_site && echo "Jekyll site build: complete"
	else
		echo "user_approval: $user_approval"
		echo "Jekyll site build: skipped"
	fi
else
	echo "Building Jekyll site"
	docker_build_site && echo "Jekyll site build: complete"
fi

# Show file tree
echo "File tree:"
tree -a -d -L 2

# Serve Jekyll site
echo "Serving Jekyll site"
docker_serve_site

exit 0
