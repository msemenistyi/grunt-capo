# grunt-capo [![Build Status](https://travis-ci.org/msemenistyi/grunt-capo.png)](https://travis-ci.org/msemenistyi/grunt-capo)

> [Capo](https://github.com/msemenistyi/capo) task for Grunt

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

##Install

```shell
npm install grunt-capo --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-capo');
```

## The "capo" task

### Overview
This task helps conituous integration of [Capo](https://github.com/msemenistyi/capo)
module. It may be used for generating reports as a build step.
Another option is to use it as validator for all the subscriptions to have 
corresponding publishers (**strict** options should be truthy).

### Options
**event**   -e --event - event name to perform search on. Can be just leading chars
of event name (e.g. `-e ap` will find all the events starting with these chars:
`ap, app, ap:message, app:context, application`).  
**object**  -o --object - mediator object name (e.g. mediator, Backbone). Case sensitive.  
**report**  -r --report - type of report. Options are: `html`, `cli`. **Default**
is `html`. String value should be specified right after flag.  
**strict**  --strict - throw error on sub for event with 0 pubs. **Default** `false`.

### Basic Usage
```js
	...
	capo: {
		options:{
			report: 'html'
		},
		fixtures_folder: {src: ['./test/fixtures/**/*.js']}
	},
	...
```

##Contributing
Feel free to open issues and send PRs, though make sure that you create tests
for new functionality and amend ones for fixes and changes. 

Versions are assigned according to [SemVer](http://semver.org/) specification. 

## Running tests
Run `npm test` in order to see test results.

## License

The MIT License (MIT)

Copyright (c) 2014 Semenistyi Mykyta nikeiwe@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.