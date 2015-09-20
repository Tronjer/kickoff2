module.exports = function (grunt) {

  var env = grunt.option('env') || 'dev',
      config = {
        path: {
        	src: 'app',
        	dist: 'dist',
          libs: 'libs',
          styles: 'assets/styles',
          bower_components: 'libs/bower_components'
        }
      };

  require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		config: config,
    pkg: grunt.file.readJSON('package.json'),

    copy: require('./grunt-tasks/copy-tasks.js'),
    clean: require('./grunt-tasks/clean-tasks.js'),
    express: require('./grunt-tasks/server-tasks.js'),
    watch: require('./grunt-tasks/watch-tasks.js'),
    jshint: require('./grunt-tasks/jshint-tasks.js'),
    uglify: require('./grunt-tasks/uglify-tasks.js'),
    ngAnnotate: require('./grunt-tasks/ng-annotate-tasks.js'),
    compass: require('./grunt-tasks/sass-tasks.js'),

	});

	
  grunt.registerTask('default', ['clean:dist', 'copy', 'compass', 'ngAnnotate', 'jshint', 'uglify', 'express', 'watch']);


};
