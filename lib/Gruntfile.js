"use strict";
module.exports = function(grunt){

//configuration
 grunt.initConfig({
    browserify: {
      js: {
        src: ['../javascripts/main.js'],
        dest: '../dist/app.js'
      },
      options: {
        transform: ["hbsfy"],
        browserifyOptions: {
          paths: [
            "./node_modules"
          ]
        }
      }
    },
    //task name
      jshint: {
            options: {
                predef: ["document", "console", "$" ], //allows for predefined things not found in js
                esnext: true, //allows for ES6
                globalstrict: true,
                globals: {"$":true, "Handlebars":true}, //name value pairs, allows to define global vars used in many files.
                browserify : true
            },
            files :['../javascripts/**/*.js']
    },
    //plugin name
    sass: {
        //task name
        dist: {
            files: {
                '../css/main.css' : '../sass/styles.scss'
            }
        }
    },
    watch: {
      js: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      },
      hbs: {
        files: ['../templates/**/*.hbs'],
        tasks: ['browserify']
      }
    }
 });

require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
grunt.registerTask('default', ['browserify','jshint', 'sass', 'watch']);


//register tasks

// grunt.registerTask('concat-javascripts', ['concat:javascripts']);
// grunt.registerTask('concat-css', ['concat:css']);
// grunt.registerTask('jshint', ['jshint']);

};
