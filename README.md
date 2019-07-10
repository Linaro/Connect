# Linaro Connect Event Website - connect.linaro.org

This is the git repository for the [Linaro Connect](https://connect.linaro.org) website. [Jekyll](https://jekyllrb.com/) is used to build the static website.

Hosted in this repo are the markdown content files associated with the website. Feel free to [submit a PR](https://github.com/Linaro/Connect/pulls) / [Issue](https://github.com/Linaro/Connect/issues/new) if there is anything you would like to change.

This static Jekyll site is using the [`jumbo-jekyll-theme`](https://github.com/linaro-marketing/jumbo-jekyll-theme). Please take a moment to review the guides on the [theme's GitHub wiki](https://github.com/linaro-marketing/jumbo-jekyll-theme/wiki).

*****

## Contributing

To make it easier to contribute to the content, Linaro provides a couple of Docker containers for building and checking the site. All you need is Docker installed on your computer and enough RAM and disc space.

To build the site:

```
cd <git repository directory>
./build-site.sh
```

To build the site and then serve it so that you can check your contribution appears:

```
cd <git repository directory>
JEKYLLACTION="serve" ./build-site.sh
```

To check that your contribution doesn't include any broken links:

```
cd <built web site directory>
../check-links.sh
```

The built web site directory will be `staging.connect.linaro.org` unless you set `JEKYLLENV=production` before building the site, in which case the directory will be `production.connect.linaro.org`.

For more information, please see the [build container wiki](https://github.com/linaro-its/jekyll-build-container/wiki) and the [link checker wiki](https://github.com/linaro-its/jekyll-link-checker/wiki).

*****

## Guides

Below are a few guides that will help when adding content/making changes to the Linaro Connect website.

- [Linaro Connect Event Website - connect.linaro.org](#linaro-connect-event-website---connectlinaroorg)
  - [Contributing](#contributing)
  - [Guides](#guides)
  - [Generic Website Guides](#generic-website-guides)
    - [Adding a Page](#adding-a-page)
    - [Adding a Blog Post](#adding-a-blog-post)
      - [Adding Redirects to the Static Site](#adding-redirects-to-the-static-site)
      - [Building the Static Site](#building-the-static-site)
  - [Connect.linaro.org Specific Guides](#connectlinaroorg-specific-guides)
    - [Editing on GitHub](#editing-on-github)
    - [Step 1 - Create an Account on GitHub/Login](#step-1---create-an-account-on-githublogin)
    - [Step 2 - Fork the Linaro/Connect repo](#step-2---fork-the-linaroconnect-repo)
    - [Step 3 - Branches on Repositories](#step-3---branches-on-repositories)
    - [Step 4 - Make your changes and submit a pull request](#step-4---make-your-changes-and-submit-a-pull-request)
      - [Overriding the need for a reviewer on your pull request](#overriding-the-need-for-a-reviewer-on-your-pull-request)
  - [Add Keynotes to the Homepage Carousel](#add-keynotes-to-the-homepage-carousel)
  - [Add a new resources section to Resources](#add-a-new-resources-section-to-resources)
  - [Adding Connect Keynote Speakers](#adding-connect-keynote-speakers)
    - [Speaker image - image](#speaker-image---image)
  - [Uploading/Editing on GitHub](#uploadingediting-on-github)
  - [Updating the Homepage Banner](#updating-the-homepage-banner)
    - [Text/logo](#textlogo)
    - [Background image](#background-image)
  - [Adding Redirects to the Static site](#adding-redirects-to-the-static-site)

*****

## Generic Website Guides

- [Adding a Page](#adding-a-page)
- [Adding a Blog Post](#adding-a-blog-post)
- [Adding Redirects to the Static Site](#adding-redirects-to-the-static-site)
- [Building the Static Site](#building-the-static-site)

### Adding a Page

Please view the theme documentation on adding pages [here](https://github.com/linaro-marketing/jumbo-jekyll-theme#adding-pages).

### Adding a Blog Post

Please view the theme documentation on adding blog posts [here](https://github.com/linaro-marketing/jumbo-jekyll-theme#adding-posts).

#### Adding Redirects to the Static Site

Please view the theme documentation on adding redirects [here](https://github.com/linaro-marketing/jumbo-jekyll-theme#adding-redirects).

#### Building the Static Site

Please view the theme documentation on building the static website [here](https://github.com/linaro-marketing/jumbo-jekyll-theme#building-the-static-site).

*****

## Specific Guidance for [connect.linaro.org](connect.linaro.org)

### Editing on GitHub

If you are editing the website on GitHub you will need to make a fork of the Linaro/Connect repo, make changes there and then create a pull request to merge your changes in the main code repository for the Connect website.

### Step 1 - Create an Account on GitHub/Login

Firstly, create an account on GitHub if you have not already done so - [Create an Account on GitHub](https://github.com/join?source=header-home) - or login to your existing GitHub account.

### Step 2 - Fork the Linaro/Connect repo

GitHub contains many repositories (basically a folder with a load of files inside it) and the Connect static website has it's own repository [here](https://github.com/Linaro/Connect). You need to make a fork (a copy) of this repository to your account. Which is as simple as clicking the fork button at the top right of the repository.

![Fork the Connect repo on GitHub](/assets/images/help/ForkRepository.png)

### Step 3 - Branches on Repositories

Each repository can have multiple branches with whatever name you choose. The Linaro Connect repository has two main branches - `develop` and `master`. The `develop` branch contains the version of the websites files that are used to build [staging.connect.linaro.org](https://staging.connect.linaro.org). The `master` branch contains the version of the websites files that are used to build [connect.linaro.org](https://connect.linaro.org). When submitting changes to the website you need to make sure you are on the correct branch.

![Changing branch on your Fork](/assets/images/help/ChangingBranchOnFork.gif)

### Step 4 - Make your changes and submit a pull request

In order to get your changes added to the Connect website you must make changes to a file/files on **your** `fork` of the Connect repository and then submit a __pull request__ (or a `PR` which is a way to get your changes added to the main `repository` and not just your copy of the Connect website.)

![Creating a pull request.](/assets/images/help/CreatingAPullRequest.gif)

![Making a change and creating a pull request.](/assets/images/help/CreatingAPullRequest.gif)

#### Overriding the need for a reviewer on your pull request

If you are certain that you need to merge the changes you have made and you are an Administrator of the repository you do the following to merge the PR.

**Warning:** If you are an administrator and are using the above method of merging your PR, please ensure that the tests __have passed__ before force merging!

![Overriding the need for a reviewer](/assets/images/help/OverridingNeedForReview.gif)

## Add Keynotes to the Homepage Carousel

Keynotes in the homepage carousel are added from the _data/yvr18-keynotes.yml file. If you need to add a keynote to the homepage carousel simply append your keynote to the data file. In regards to following Connect events, duplicate the yvr18-keynotes.yml file and rename appropriately. Then change the included data file by amending this line:

```
...
{% include sections/keynotes.html keynotes=site.data.yvr18-keynotes %}
...
```

E.g

```
...
{% include sections/keynotes.html keynotes=site.data.bkk19-keynotes %}
...
```

## Add a new resources section to Resources

The resources section is generated from the `_data/connects.yml` file. This should be modified to include all the previous Connect events which have resources.

## Adding Connect Keynote Speakers

Speakers on the static Connect website are posts with a category of `speaker`. Speakers have been added to the _posts/speaker folder to keep them separate from resources/blog posts. In order to add a speaker simply copy an existing speaker and modify accordingly. Below are the values in the post's front matter (values between to two set's of `---` at the top of the file):

Front matter example from a speaker post

```
---
author: linaro
categories: speaker
comments: false
date: 2018-08-14 08:40:50
image:
  featured: true
  name: ShinpeiKato.jpg
  path: /assets/images/speakers/ShinpeiKato.jpg
layout: speaker-post
permalink: /speaker/:title/
title: Shinpei Kato
---
```

### Speaker image - image

Add the speakers image to the /assets/images/speakers/ sub folder and modify the path and name to match the image you added.

## Uploading/Editing on GitHub

To upload a file on GitHub you first need to navigate to the folder you wish to add the image to.

![Uploading a speaker image through GitHub](/assets/images/help/UploadASpeakerImage.gif)

Verify you are on your fork of the repo and not the main Connect repository. Also make sure you are pushing to the master branch (the branch to main live site is built from - unless you are testing the changes which can be added to the develop branch and built to staging.connect.linaro.org).

## Updating the Homepage Banner

### Text/logo

You can modify the home page banner by updating the '_include/hero-banner.html' include. Here you can find the text / Connect logo used in the banner.

### Background image

To modify the background image you change the image listed in the home section of '_data/settings.yml' file.

```
background-image:
    # Darken is set to true by default - if you wish to remove the image overlay
    # then change this setting to false.
    darken: false
    # This is the name of the background-image located in /assets/images/
    name: YVR18-banner-high-res.jpg
```

Updated the `name` of the image to one that is include in a /assets/images/ folder. If you add a new folder please make sure to add to the jekyll-assets paths in the _config.yml

```
assets:
  compress:
        js: true
  autoprefixer:
      browsers: ["last 2 versions","> 5%","IE 9"]
  sources:
    - assets/js/
    - assets/js/vendor/
    - assets/js/app/
    - assets/images
    - assets/images/sponsors
    - assets/images/featured-images
    - assets/images/people
    - assets/images/speakers
    - assets/images/content
    - assets/images/blog
    - assets/css/
```

All the paths listed above are used by Jekyll when looking for image assets.

## Adding Redirects to the Static site

We are using [Edge-rewrite](https://github.com/marksteele/edge-rewrite) which is a rewrite engine running in Lambda@Edge. The redirects are to be added to the `_data/routingrules.json` file in the website repository following the syntax rules [here](https://github.com/marksteele/edge-rewrite).

```
^/oldpath/(\\d*)/(.*)$ /newpath/$2/$1 [L]
!^/oldpath.*$ http://www.example.com [R=302,L,NC]
^/topsecret.*$ [F,L]
^/deadlink.*$ [G]
^/foo$ /bar [H=^baz\.com$]
```

__Note:__ These redirects are currently not respected by the link checker until built: fix broken links rather than trying to add redirects to work around them!
