Grunt SassyClean
================

[![npm version](https://badge.fury.io/js/grunt-sassyclean.svg)](http://badge.fury.io/js/grunt-sassyclean) [![npm](https://img.shields.io/npm/dm/grunt-sassyclean.svg)](https://github.com/ryanburgess/grunt-sassyclean) [![Build Status](https://travis-ci.org/ryanburgess/grunt-sassyclean.svg?branch=master)](https://travis-ci.org/ryanburgess/grunt-sassyclean)

![SassyClean logo](https://raw.github.com/ryanburgess/grunt-sassyclean/master/sassyclean.png)

Grunt SassyClean scans a project for partials that are never imported. SassyClean provides the option to automatically delete the unused partials or display the file name as a console log.

## Getting Started

If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```sh
npm install grunt-sassyclean --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sassyclean');
```

*Tip: the [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks) module makes it easier to load multiple grunt tasks.*

[grunt]: http://gruntjs.com
[Getting Started]: https://github.com/gruntjs/grunt/wiki/Getting-started


## Documentation

See the [Gruntfile](Gruntfile.js) in this repo for a full example.


### Example config

```js
grunt.initConfig({
  sassyclean: {
    options: {
      modules: ['sass/modules/**/*.scss', 'sass/themes/**/*.scss', 'sass/layout/**/*.scss', 'sass/base/**/*.scss'],
      buildfiles: ['sass/**/*.scss'],
      remove: false,
      days: null
    },
  }
});

grunt.loadNpmTasks('grunt-sassyclean');
grunt.registerTask('default', ['sassyclean']);
```

### Options

#### buildfiles
Type: `String`
Default value: `sass/`

A reference to the directory of files that are being checked if any of the module files are referenced in the root sass files.

#### modules
Type: `String|Array`
Default value: `['**/*.scss']`

The modules option provides the ability to set an array of directories that contain Sass modules.

#### remove
Type: `Boolean`
Default value: `false`

The ablity to automatically delete unused file reference from the project.

#### days
Type: `Number`
Default value: `false`

If remove is set to true and days has a value, files will only be deleted if the file hasn't been modified greater than the length of days.

## Release History
* 0.1.7: Add Travis CI.
* 0.1.6: Readme updates.
* 0.1.5: Update dev dependencies.
* 0.1.4: Add Grunt JSHint.
* 0.1.3: Clean up documentation.
* 0.1.2: fix [issue #1](https://github.com/ryanburgess/grunt-sassyclean/issues/1) better explain Grunt task.
* 0.1.1: Adding moment as a dependency.
* 0.1.0: Initial release.

## Related
* [Gulp SassyClean](https://github.com/ryanburgess/gulp-sassyclean)
* [Sassy Sass](https://github.com/ryanburgess/sassysass)

## Contributing
1. Fork it
2. Run `npm install`
3. Run Grunt watch `grunt watch`
4. Create your feature branch (`git checkout -b my-new-feature`)
5. Commit your changes (`git commit -am "Add some feature"`)
6. Push to the branch (`git push origin my-new-feature`)
7. Create new Pull Request

## License
MIT © [Ryan Burgess](http://github.com/ryanburgess)
