# connect.linaro.org Static Jekyll Site

Welcome to the official content repository for Linaro Connect's static Jekyll based website.
Hosted in this repo are the markdown content files associated with the website. Feel free to [submit a 
PR](https://github.com/linaro/connect/pulls) / [Issue](https://github.com/Linaro/connect/issues/new) if there is anything you would like to change.



# Setting up ImageMagick/RMagick
To generate different size images for the Connect website we are using jekyll-responsive-image which generates different sized images on a per image basis.
When building on Ubuntu 18.04 I need to do the following before running bundle.

```bash
$ apt install libmagickcore-dev imagemagick libmagickwand-dev ruby-rmagick
```

This install the required packages the rmagick/jekyll-responsive-image gems need in order to run.


## Contributing
### Guides

Coming soon...
