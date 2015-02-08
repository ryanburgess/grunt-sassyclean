/*
 * grunt-sassyclean
 * https://github.com/ryanburgess/grunt-sassyclean
 *
 * Copyright (c) 2014 Ryan Burgess
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  grunt.registerTask('sassyclean', function(){
    var fs = require('fs'),
      path = require('path'),
      moment = require('moment'),
      options,
      modules,
      buildfiles,
      unused,
      content,
      datemod,
      todayDate,
      startDate,
      endDate,
      dayDiff,
      extension,
      fullpath,
      newfile,
      assets = [],
      links = [],
      fullfile = [];

    options = this.options({
      modules: ['sass/modules/**.scss'],
      buildfiles: ['sass/**/*.scss'],
      remove: false,
      days: null
    });

    //get current date and time
    function getDateTime() {

        var date = new Date(),
          hour,
          min,
          sec,
          year,
          month,
          day;

        //get hours
        hour = date.getHours();
        hour = (hour < 10 ? "0" : "") + hour;

        //get minutes
        min  = date.getMinutes();
        min = (min < 10 ? "0" : "") + min;

        //get seconds
        sec  = date.getSeconds();
        sec = (sec < 10 ? "0" : "") + sec;

        //get year
        year = date.getFullYear();

        //get month
        month = date.getMonth() + 1;
        month = (month < 10 ? "0" : "") + month;

        //get day
        day  = date.getDate();
        day = (day < 10 ? "0" : "") + day;

        return year + "-" + month + "-" + day; 

    }

    todayDate = getDateTime();


    function deleteFile(fileRef){
      fs.unlinkSync(fileRef);
      console.log('deleted '+ fileRef);
    }

    function logFiles(fileRef){
      console.log(fileRef);
    }

    // Get list of modules
    var i = 0;
    grunt.file.expand({
      filter: 'isFile',
      }, options.modules).forEach(function(file){
        extension = path.extname(file);
        var justPath = file.substring(0, file.lastIndexOf('/'));
        newfile = file.replace(justPath, '').replace('/_', '').replace(extension, '');
        fullfile.push(newfile, file);
        fullfile[i] = { 'file': newfile, 'path': file };

        i++;
        assets.push(newfile);
    });

    // Find the modules referenced in build files
    grunt.file.expand({
      filter: 'isFile',
      }, options.buildfiles).forEach(function(file){ // Change this to narrow down the search
      content = grunt.file.read(file);
      assets.forEach(function(asset){
        if(content.indexOf(asset) !== -1){
          links.push(asset);
        }
      });
    });

    // Output unused files list in console
    unused = grunt.util._.difference(assets, links);
    // output number of unused files
    grunt.log.ok(unused.length + ' file' + (unused.length === 1 ? '' : 's') + ' unused files:');

    unused.forEach(function(file){
      //add the underscore back to sass module file names
      var fullfilename = '_' + file + extension;
      for (var i = 0; i < fullfile.length; i++){
        if (fullfile[i].file === file) {
          fullpath = fullfile[i].path;
        }
      }

      // delete file if remove is set to true
      if(options.remove === true && options.days !== null){
        datemod = fs.statSync(options.reference + file).mtime.toISOString();
        datemod = datemod.replace(/\T.+/, '');
        startDate = moment(datemod, 'YYYY-M-DD');
        endDate = moment(todayDate, 'YYYY-M-DD');
        dayDiff = endDate.diff(startDate, 'days');

        if(dayDiff >= options.days){
          //delete file
          deleteFile(fullpath);
        }else{
          // log file references
          logFiles(fullpath);
        }
      }else if(options.remove === true){
        //delete file
        deleteFile(fullpath);
      }else{
        // log file references
        logFiles(fullpath);
      }
    });
  });
};