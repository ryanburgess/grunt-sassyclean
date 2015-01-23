Grunt Sassy Clean
================

Grunt Sassy Clean scans a project for partials that are never imported. Sassy Clean provides the option to automatically delete the unused partials or display the file name as a console log.

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

An array of directories that contain Sass modules.

#### remove
Type: `Boolean`
Default value: `false`

The ablity to automatically delete unused file reference from project.

#### days
Type: `Number`
Default value: `false`

If remove is set to true and days has a value files will only delete if the file hasn't been modified after the length of days.

## Release History
* 0.1.2: fix [issue #1](https://github.com/ryanburgess/grunt-sassyclean/issues/1) better explain Grunt task.
* 0.1.1: Adding moment as a dependency.
* 0.1.0: Initial release.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request


## License

MIT © [Ryan Burgess](http://ryanburgess.com)
