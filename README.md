# connect.linaro.org Static Jekyll Site

Welcome to the official content repository for Linaro Connect's static Jekyll based website.
Hosted in this repo are the markdown content files associated with the website. Feel free to [submit a 
PR](https://github.com/linaro/connect/pulls) / [Issue](https://github.com/Linaro/connect/issues/new) if there is anything you would like to change.

## Prerequisites

### ImageMagick/RMagick

To generate different size images for the Connect website we use jekyll-responsive-image.
When building on Ubuntu 18.04 you will need to install:

- libmagickcore-dev
- imagemagick
- libmagickwand-dev
- ruby-rmagick

You can do this with e.g:

```bash
sudo apt install -y libmagickcore-dev imagemagick libmagickwand-dev ruby-rmagick
```

## Building

When working on the Dockerfile, it may be useful to tag the image with datestamp. For example:

```bash
docker build --label "Ruby environment for building connect.linaro.org" --memory 1GB --cpuset-cpus 0 --rm -t "linaro/connect:$(date --iso-8601)" ./
```

Build with:

```bash
docker build --label "Ruby environment for building connect.linaro.org" --memory 1GB --cpuset-cpus 0 --rm -t "linaro/connect:latest ./
```

### Build script

```bash
./build.sh
```

## Contributing

### Guides
