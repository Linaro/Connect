# For building the Linaro Connect website

# Set the base image to Ubuntu (version 18.04)
# Uses the new "ubuntu-minimal" image
# Should be Alpine like all the cool kids, but
FROM ubuntu:18.04

# File Authors / Maintainers
# Initial Maintainer
LABEL maintainer="Ciaran Moran"

################################################################################
# Basic APT commands
# Tell apt not to use interactive prompts
RUN export DEBIAN_FRONTEND=noninteractive && \
# Clean package cache and upgrade all installed packages
	apt-get clean \
# No confirmation
	-y && \
	apt-get update && \
	apt-get upgrade -y && \
# Clean up package cache in this layer
	apt-get --purge autoremove -y && \
	apt-get clean -y && \
# Restore interactive prompts
	unset DEBIAN_FRONTEND
################################################################################

################################################################################
# Provides PPA support
# Package "software-properties-common" provides command "add-apt-repository"
RUN export DEBIAN_FRONTEND=noninteractive && \
	apt-get install -y \
	software-properties-common && \
# Add Brightbox Ruby 2.x package repository
	add-apt-repository --yes \
		ppa:brightbox/ruby-ng
################################################################################

################################################################################
# Configure locale for jekyll build
RUN export DEBIAN_FRONTEND=noninteractive && \
	apt-get install -y \
	language-pack-en \
	&& \
	locale-gen en_US.UTF-8 \
	&& \
# Set locale
	dpkg-reconfigure locales && \
# Remove stale dependencies
	apt-get --purge autoremove -y && \
	apt-get clean -y
################################################################################

################################################################################
# Install latest software
# Change the date time stamp if you want to rebuild the image from this point down
# Useful for Dockerfile development
ENV SOFTWARE_UPDATED 2018-07-31.1441

# Install packages
# Add update && upgrade to this layer in case we're rebuilding from here down
RUN export DEBIAN_FRONTEND=noninteractive && \
	apt-get update && \
	apt-get upgrade -y && \
	apt-get install -y --no-install-recommends \
# Jekyll prerequisites, https://jekyllrb.com/docs/installation/
	make \
	build-essential \
# Ruby 2.5 development environment
	ruby2.5-dev \
# rmagick requires MagickWand libraries
	libmagickwand-dev \
# nodejs package/rubyracer test
# https://github.com/jekyll/jekyll/issues/2327
	ruby-dev \
	&& \
	apt-get --purge autoremove -y && \
	apt-get clean -y
################################################################################

################################################################################
# Install Bundler
RUN gem install --conservative \
	bundler \
	jekyll

# Add update && upgrade to this layer in case we're rebuilding
RUN export DEBIAN_FRONTEND=noninteractive && \
	apt-get update && \
	apt-get upgrade -y && \
	apt-get --purge autoremove -y && \
	apt-get clean -y
################################################################################

################################################################################
# Create user accounts
RUN useradd --create-home --shell /bin/bash buildbot
################################################################################

################################################################################
# Dockerfile development only
ENV CONFIG_UPDATED 2018-07-31.1523
# COPY Gemfile /srv/Gemfile
################################################################################

# Run as user buildbot
USER buildbot:buildbot

WORKDIR /srv

EXPOSE 4000

CMD /bin/bash
