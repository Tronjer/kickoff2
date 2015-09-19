module.exports = function (grunt) {

  var env = grunt.option('env') || 'dev',
      config = {
        path: {
        	src: 'app',
        	dist: 'dist',
          bower_components: 'bower_components'
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
    uglify: require('./grunt-tasks/uglify-tasks.js'),
    ngAnnotate: require('./grunt-tasks/ng-annotate-tasks.js')

	});

	if ( env == 'production' ) {
    grunt.registerTask('build', ['clean:dist']);
  } else {
    grunt.registerTask('build', ['clean:dist', 'copy', 'ngAnnotate', 'uglify', 'express', 'watch']);
  }


	grunt.registerTask('default', ['build']);
};
