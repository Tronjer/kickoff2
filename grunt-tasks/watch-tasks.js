module.exports = {
  /**
  ** Watches File changes
  **/
	options: {
		livereload: true,
    spawn: false
	},
  express: {
    files: [
    	'<%= config.path.dist %>/**/*.html',
    	'<%= config.path.dist %>/js/*.js',
    ],

    tasks: 'express'
  },
	copy: {
		files: [
			'<%= config.path.src %>/**/*.html'
		],
		tasks: 'copy'
	},
	uglify: {
		files: [
			'<%= config.path.src %>/**/*.js'
		],
		tasks: 'uglify'
	}
};
