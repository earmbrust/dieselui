Diesel UI was forked from the popular Fuel UX Twitter Bootstrap extension.

Diesl UI extends Twitter Bootstrap with additional lightweight JavaScript controls.
Other benefits include easy installation into web projects, integrated scripts for customizing Bootstrap and Diesl UI,
simple updates, and solid optimization for deployment. All functionality is covered by live documentation and unit tests.

[![Build Status](https://secure.travis-ci.org/earmbrust/dieselui.png?branch=master)](http://travis-ci.org/earmbrust/dieselui)

## Features

Diesl UI provides all of the styles and plugins from the revolutionary [Twitter Bootstrap](http://twitter.github.com/bootstrap) project, with the following additions:

* Diesl UI JavaScript controls (with unit tests) [see them live](http://earmbrust.github.io/dieselui/)
  * Checkbox - _consistent cross-browser cross-platform look and feel for checkbox elements_
  * Combobox - _combines input and dropdown for easy and flexible data selection_
  * Datagrid - _renders data in a table with paging, sorting, and searching_
  * Pillbox - _manages selected items with color-coded text labels_
  * Radio - _consistent cross-browser cross-platform look and feel for radio elements_
  * Search - _combines input and button for integrated search interaction_
  * Select - _extends button dropdown with the ability to set and retrieve the selected item_
  * Spinner - _provides convenient numeric input with increment and decrement buttons_
  * Tree - _renders data in a tree, supporting caching and optional multi-selection_
  * Wizard - _displays a multi-step process to be completed in a specific order_
<p>
* [AMD](http://requirejs.org/docs/whyamd.html) compatibility for modular structure and deployment optimization
* [Grunt](https://github.com/cowboy/grunt)-based build script to easily create custom distribution files
* Namespaced CSS (just add a `fuelux` class) for safe use on existing sites

## Getting Started
* `git clone git://github.com/earmbrust/dieselui.git`
* Default Diesl UI files for production use are located in the [dist](https://github.com/earmbrust/dieselui/tree/master/dist) directory
* To customize, modify the JS and LESS files under [src](https://github.com/earmbrust/dieselui/tree/master/src) then run `grunt` to regenerate your [dist](https://github.com/earmbrust/dieselui/tree/master/dist) directory (more below)

## Documentation and Examples

### Live docs and demos

Hosted on GitHub pages: http://exacttarget.github.com/fuelux


## Issues and Feature Requests

### Search for or report a bug

Use GitHub issues: https://github.com/earmbrust/dieselui/issues

### View the roadmap and suggest new ideas

Visit our UserVoice community: https://fuelux.uservoice.com

## Release History

_Diesl UI is semantically versioned: <http://semver.org>_

### Version 1.0.0 `2013-08-02`
* Initial fork from [Fuel UX](http://exacttarget.github.io/fuelux/)


## Contributing
Before writing code, we suggest you [search for issues](https://github.com/earmbrust/dieselui/issues?state=open)
or [create a new one](https://github.com/earmbrust/dieselui/issues/new) to confirm where your contribution fits into
our roadmap.

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

### Important notes
__The `dist` directory will be removed soon, to provide sanity for the SCM and lighter pulls.__
Please don't edit files in the `dist` directory as they are generated via grunt. You'll find source code in the `src` directory!

While grunt can run the included unit tests via PhantomJS, this isn't a substitute for the real thing. Please be sure to test the `test/*.html` unit test file(s) in real browsers as well.


## Acknowledgements

We are grateful to the maintainers, contributors, and sponsors of the following technologies which make Diesel UI possible:

* [Fuel UX](http://exacttarget.github.io/fuelux/) (Original extension)

* [jQuery](http://jquery.com) (Library for DOM, events, animation, and AJAX)

* [Twitter Bootstrap](http://twitter.github.com/bootstrap) (Modern UI components and interactions)

* [LESS](http://lesscss.org) (Stylesheet definition and management)

* [RequireJS](http://requirejs.org) (Tool for managing modular JavaScript)

* [grunt](https://github.com/cowboy/grunt) (Build tool for JavaScript projects)

## Authors
**Elden Armbrust**

+ http://www.linkedin.com/in/eldenarmbrust
+ http://github.com/earmbrust

**Nephi Wright**

+ http://github.com/nephiw

### Original (Fuel UX) Authors
**Adam Alexander**

+ http://twitter.com/adamalex
+ http://github.com/adamalex

**Matt Beard**

+ http://github.com/mbeard

**Bryan Kohlmeier**

+ http://github.com/bkohlmeier

**Kevin Parkerson**

+ http://github.com/kevinparkerson

**Christopher McCulloh**

+ http://github.com/cmcculloh

**David Waltz**

+ https://github.com/dwaltz

**Dustin McCormick**

+ http://twitter.com/djmccormick
+ http://github.com/djmccormick

**Scott Plumlee**

+ http://twitter.com/scottplumlee
+ http://github.com/plumlee

**Marvin Pribble**

+ http://github.com/marvinpribble

## Copyright and license

Copyright (c) 2012 Elden Armbrust

Licensed under the MIT License (the "License");
you may not use this work except in compliance with the License.
You may obtain a copy of the License in the COPYING file.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
