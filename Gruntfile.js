module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sassyclean: {
      options: {
        modules: ['sass/modules/**/*.scss', 'sass/themes/**/*.scss', 'sass/layout/**/*.scss', 'sass/base/**/*.scss'],
        buildfiles: ['sass/**/*.scss'],
        remove: false,
        days: null
      },
    },
    jshint: {
      all: ['**/*.js'],
      options: {
        reporter: require('jshint-stylish'),
        curly: true,
        eqeqeq: true,
        eqnull: false,
        browser: true,
        indent: 2,
        quotmark: 'single',
        unused: false,
        ignores: ['node_modules/**/*.js'],
        globals: {
          jQuery: true
        },
      },
    },
    jsonlint: {
      sample: {
        src: [ '**/*.json' ]
      }
    },
    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      json: {
        files: ['**/*.json'],
        tasks: ['newer:jsonlint'],
        options: {
          spawn: false
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-sassyclean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default',['watch']);
};