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
    }
  });
  grunt.loadNpmTasks('grunt-sassyclean');
  grunt.registerTask('default',['sassyclean']);
};