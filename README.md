# Webnomad for Bulma

Template to build your own website using Webnomad styled in Bulma.

For more information about the software components:

- https://dyne.org/software/webnomad
- http://bulma.io

## Install

Make sure you have a recent version of [NodeJS](nodejs.org), [NPM](npmjs.org) and [Yarn](yarnpkg.com) installed on your system, as well [Zsh](zsh.org) and [Pandoc](pandoc.org).

Once it is all in place, do:

```sh
make install
```

## What's included

The dependencies included in `package.json` are:

* <code>[bulma](https://github.com/jgthms/bulma)</code>
* <code>[node-sass](https://github.com/sass/node-sass)</code> to compile your own Sass file
* <code>[postcss-cli](https://github.com/postcss/postcss-cli)</code> and <code>[autoprefixer](https://github.com/postcss/autoprefixer)</code> to add support for older browsers
* <code>[babel-cli](https://babeljs.io/docs/usage/cli/)</code>, <code>[babel-preset-env](https://github.com/babel/babel-preset-env)</code> and <code>[babel-preset-es2015-ie](https://github.com/jmcriffey/babel-preset-es2015-ie)</code> for compiling ES6 JavaScript files
* <code>[markdown-inline-tag](https://github.com/dyne/markdown-inline-tag)</code> to render XML markdown tags inside HTML pages

Apart from `package.json`, the following files are included:

* `.babelrc` configuration file for [Babel](https://babeljs.io/)
* `.gitignore` common [Git](https://git-scm.com/) ignored files
* `index.html` this HTML5 file
* `_sass/main.scss` a basic SCSS file that **imports Bulma** and explains how to **customize** your styles, and compiles to `css/main.css`
* `_javascript/main.js` an ES6 JavaScript that compiles to `lib/main.js`

## Get your feet wet

This package is meant to provide a **good starting point** for working with WebNomad and Bulma.

Read here to understand how to [use this repository as a template](https://github.blog/2019-06-06-generate-new-repositories-with-repository-templates/) for your own website.

Use it as a GitHub template and start editing:
- `.html` files in `views/`
- `.css` files in `_sass`
- `.js` files in `_javascript`

Beware that stylesheets are processed through the [libSass](https://sass-lang.com/libsass) pre-processor.

To build your project:

```sh
make build
```

To preview your project:

```sh
make preview
```

As long as the preview is running it will **watch** your changes. You can edit `_sass/main.scss` and `_javascript/main.js` and `views/index.html` at will. Changes are **immediately** compiled to their destinations, where `index.html` will pick them up upon reload in your browser (you must reload by hand!).

Some controlling output is written to the `make preview` console in that process, along with rendering errors.

To deploy your project setup Github pages to pick it from the `docs/` directory and eventually setup a CNAME to use your own domain.

## Styling

If you want to learn how to use Bulma for the layout design of your website, follow these links: [Bulma homepage](http://bulma.io) and [Documentation](http://bulma.io/documentation/overview/start/).

## Copyright and license

Copyright (C) 2017 by Jeremy Thomas.

Copyright (C) 2018-2020 by the Dyne.org foundation.

Code released under [the MIT license](https://github.com/jgthms/bulma-start/blob/master/LICENSE).
