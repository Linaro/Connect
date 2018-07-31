# connect.linaro.org website

Welcome to the official content repository for Linaro Connect's static Jekyll based website.
Hosted in this repo are the markdown content files associated with the website. Feel free to [submit a PR](https://github.com/linaro/connect/pulls) / [Issue](https://github.com/Linaro/connect/issues/new) if there is anything you would like to change.

PR's related to the Dockerfile and build.sh will take considerably longer to review than Jekyll or content changes.

## Prerequisites

- Linux or *NIX-like OS: tested under [Arch Linux](https://archlinux.org) and [Ubuntu Linux 17.10](https://www.ubuntu.com/) on x86_64, Dell XPS 15 (9560).
- [Bash](https://www.gnu.org/software/bash/) or [ZSH](http://zsh.sourceforge.net/).
- [Docker Community Edition](https://www.docker.com/community-edition#/download) (and probably therefore [Docker Enterprise Edition](https://www.docker.com/enterprise-edition)).
- \>= 2GiB of free RAM.
- \>= 2GiB free disk space.

This should build and run under [Docker on Windows](https://docs.docker.com/docker-for-windows/) (10?) with Microsoft Hyper-V: documentation should be added here.

May work under [Docker on FreeBSD](https://wiki.freebsd.org/Docker), Mac OS, etc (totally untested).

## Building

When working on the Dockerfile, it may be useful to tag the image with a date-time stamp. For example:

```docker build``` _...snip..._ ```-t "linaro/connect:$(date --iso-8601)"```

would result in a ```TAG``` value like ```2017-07-31```.

Use the build script for convenience, or adapt the ```docker run``` commands correspondingly. The build script will echo all commands run, including the results of variable expansions, etc, so you should easily be able to copy and paste the parts you want for debugging.

### Build notes

A modified build script is used for deployment onto AWS and is not currently publically available.

This build script should probably be replaced by a make file.

### Building using the build script

Run ```./build.sh``` in a Bash or ZSH shell.

Browse to [http://127.0.0.1:4000/] to view the website.

## Contributing

1. ```git clone``` this repo
1. ```jekyll build``` and ```jekyll serve``` the site so you can review your changes.
1. Commit messages must be succint: Pull Requests (PR's) must state the purpose of your changes.

Markdown files, SASS files, etc. must pass basic lint checks before your PR will be accepted. Please check them before submitting to save you and us time.

Links must be checked before submitting.
