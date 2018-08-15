# connect.linaro.org website

Welcome to the official content repository for Linaro Connect's static Jekyll based website.
Hosted in this repo are the markdown content files associated with the website. Feel free to [submit a PR](https://github.com/linaro/connect/pulls) / [Issue](https://github.com/Linaro/connect/issues/new) if there is anything you would like to change.

PR's related to the Dockerfile and build.sh will take considerably longer to review than Jekyll or content changes.


## Guides

Below are a few guides that will help when adding content to the Linaro website.

- [Editing on GitHub](#editing-on-gitHub)
- [Adding a blog post](#adding-a-blog-post)
- [Building and Contributing](#building-and-contributing)

*****

## Editing on GitHub

If you are editing the website on GitHub you will need to make a fork of the Linaro/Connect repo, make changes there and then create a pull request to merge your changes in the main code repository for the Connect website.

### Step 1 - Create an Account on GitHub/Login
Firstly, create an account on GitHub if you have not already done so - [Create an Account on GitHub](https://github.com/join?source=header-home) - or login to your existing GitHub account.

### Step 2 - Fork the Linaro/Connect repo.

GitHub contains many repositories (basically a folder with a load of files inside it) and the Connect static website has it's own repository [here](https://github.com/Linaro/Connect). You need to make a fork (a copy) of this repository to your account. Which is as simple as clicking the fork button at the top right of the repository.

![Fork the Connect repo on Github](/assets/images/help/ForkRepository.png)

### Step 3 - Branches on Repositories

Each repository can have multiple branches with whatever name you choose. The Linaro Connect repository has two main branches - `develop` and `master`. The `develop` branch contains the version of the websites files that are used to build [staging.connect.linaro.org](https://staging.connect.linaro.org). The `master` branch contains the version of the websites files that are used to build [connect.linaro.org](https://connect.linaro.org). When submitting changes to the website you need to make sure you are on the correct branch. 


![Changing branch on your Fork](/assets/images/help/ChangingBranchOnFork.gif)


### Step 4 - Make your changes and submit a pull request.

In order to get your changes added to the Connect website you must make changes to a file/files on **your** `fork` of the Connect repository and then submit a __pull request__ (or a `PR` which is a way to get your changes added to the main `repository` and not just your copy of the Connect website.) 

For example we will edit the https://connect.linaro.org/about/ page text and submit a PR.




## Adding Connect Speakers

Speakers on the static Connect website are posts with a category of `speaker`. Speakers have been added to the _posts/speaker folder to keep them separate from resources/blog posts. In order to add a speaker simply copy an existing speaker and modify accoridngly. Below are the values in the post's front matter (values between to two set's of --- at the top of the file):

**Front matter example from a speaker post**

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

### Speaker image - image:

Add the speakers image to the /assets/images/speakers/ sub folder and modify the path and name to match the image you added.

**Uploading/Editing on GitHub**

To upload a file on GitHub you first need to navigate to the folder you wish to add the image to.

![Uploading a speaker image through GitHub](/assets/images/help/UploadASpeakerImage.gif)

Verify you are on your fork of the repo and not the main Connect repository. Also make sure you are pushing to the master branch (the branch to main live site is built from - unless you are testing the changes which can be added to the develop branch and built to staging.connect.linaro.org).

## Updating Home page Banner

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

## Adding a blog post

In order to add a blog post to the Connect website copy an existing blog post from the [_posts/blog/ folder](https://github.com/Linaro/connect/tree/master/_posts/blog). Posts on the Connect website are either typical blog posts (/blog/your-title/) or resource posts from a Linaro Connect event (/resources/yvr18/yvr18-100k1/).

### Step 1 - Modify the post file name
The url for your title is based on the title provided in the filename e.g 2018-06-07-yvr18-wrap-up.md will have a url of /blog/yvr18-wrap-up/. Separate the words in your title by dashes and modify the date at the start of the filename as neccessary. 

### Step 2 - Modify the post front matter
Modify the post front matter based on your post. Values to modify are:
- author:
- date:
- image:
- tags:
- description:

#### Author
Change the author to a unique author shortname. If this is your first time posting then add your author values to the [_data/authors.yml file](https://github.com/Linaro/connect/blob/master/_data/authors.yml). Make sure to add your profile image to the [/assets/images/authors folder](https://github.com/Linaro/connect/tree/master/assets/images/authors). Verify that the author name is an exact match to that provided as the author: in your post.

#### Date
Modify the date to sometime before you post the blog otherwise Jekyll will see it as a __future__ post and not render it until the time on the server exceeds/equals that provided as the date in the post front matter.

#### Image
This value is used for the featured image displayed on your blog post and the image that is used when sharing the blog post on social media sites.

```YAML

image:
    featured: true
    path: /assets/images/blog/yvr18-wrap-up.png
    name: yvr18-wrap-up.png
    thumb: yvr18-wrap-up.png 
    
```

Make sure that the image you add in this section of front matter is placed in the [/assets/images/blog folder](https://github.com/Linaro/connect/tree/master/assets/images/blog).

#### Tags
These should be modified based on the content of your post as they are used for Meta keywords so that people can find your post based on the [tags your provide](https://www.Linaro.org/blog/tag/).

#### Description
Change this value to a short description of your blog post as this is used for the meta description of your blog post.


### Step 3 - Add your post content.

Write your post content in Markdown format; specifically the [Kramdown](https://kramdown.gettalong.org/) Markdown flavour.

#### Adding images
Please use the following code snipppet to add an image to your blog post. Make sure to add the images that you include to [/assets/images/blog folder](https://github.com/Linaro/connect/tree/master/assets/images/blog).

```
{% include image.html name="name-of-your-image.png" alt="The Alt text for your image" %}
```

You also align/scale your image using the following css classes.

| Class               | Details                           |
| ------------------- | --------------------------------- |
| small-inline        | Small image aligned to the left   |
| small-inline right  | Small image aligned to the right  |
| medium-inline       | Medium image aligned to the left  |
| medium-inline right | Medium image aligned to the right |
| large-inline        | Large image aligned to the left   |
| large-inline right  | Large image aligned to the right  |

```
{% include image.html name="name-of-your-image.png"  class="medium-inline" alt="The Alt text for your image" %}
```

Using this Jekyll include will allow your images to be lazy loaded and format the image HTML correctly.


#### Adding code

We are using the rouge syntax highlighter to highlight your glorious code. 

```bash
$ bundle exec jekyll serve --port 1337
```

See the full list of languages [here](https://github.com/jneen/rouge/wiki/List-of-supported-languages-and-lexers).


#### Adding Media/YouTube videos

To add a media element / YouTube video use the following Jekyll include.

```
{% include media.html media_url="https://youtu.be/GFzJd0hXI0c" %}
```

*****

## Building and Contributing

### Prerequisites

- Linux or *NIX-like OS: tested under [Arch Linux](https://archlinux.org) and [Ubuntu Linux 17.10](https://www.ubuntu.com/) on x86_64, Dell XPS 15 (9560).
- [Bash](https://www.gnu.org/software/bash/) or [ZSH](http://zsh.sourceforge.net/).
- [Docker Community Edition](https://www.docker.com/community-edition#/download) (and probably therefore [Docker Enterprise Edition](https://www.docker.com/enterprise-edition)).
- \>= 2GiB of free RAM.
- \>= 2GiB free disk space.

This should build and run under [Docker on Windows](https://docs.docker.com/docker-for-windows/) (10?) with Microsoft Hyper-V: documentation should be added here.

May work under [Docker on FreeBSD](https://wiki.freebsd.org/Docker), Mac OS, etc (totally untested).

### Building

When working on the Dockerfile, it may be useful to tag the image with a date-time stamp. For example:

```docker build``` _...snip..._ ```-t "linaro/connect:$(date --iso-8601)"```

would result in a ```TAG``` value like ```linaro/connect:2017-07-31```.

Use the build script for convenience, or adapt the ```docker run``` commands correspondingly. The build script will echo all commands run, including the results of variable expansions, etc, so you should easily be able to copy and paste the parts you want for debugging.

#### Build notes

A modified build script is used for deployment onto AWS and is not currently publically available.

This build script should probably be replaced by a make file.

#### Building using the build script

Run ```./build.sh``` in a Bash or ZSH shell.

Browse to [http://127.0.0.1:4000/](http://127.0.0.1:4000/) to view the website.

### Contributing

1. ```git clone``` this repo
2. ```jekyll build``` and ```jekyll serve``` the site so you can review your changes.
3. Commit messages must be succint: Pull Requests (PR's) must state the purpose of your changes.

Markdown files, SASS files, etc. must pass basic lint checks before your PR will be accepted. Please check them before submitting to save you and us time.

Links must be checked before submitting.
