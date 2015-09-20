module.exports = {
	options: {
		livereload: true,
    spawn: false
	},
  express: {
    files: [
    	'<%= config.path.dist %>/**/*.html',
    	'<%= config.path.dist %>/js',
    	'<%= config.path.dist %>/css',
    	'<%= config.path.dist %>/img'
    ],
    tasks: 'express'
  },
	copy: {
		files: [
			'<%= config.path.src %>/**/*.html'
		],
		tasks: 'copy'
	},
	jshint: {
		files: [
			'Gruntfile.js',
			'<%= config.path.src %>/**/*.js', 
			'!<%= config.path.src %>/app.js'
		],
		tasks: 'jshint'
	},
	uglify: {
		files: [
			'<%= config.path.src %>/**/*.js'
		],
		tasks: 'uglify'
	},
	compass: {
		files: '<%= config.path.src %>/<%= config.path.styles %>/**/*.scss',
		tasks: 'compass'
	},
	imagemin: {
    files: [
      '<%= config.path.src %>/<%= config.path.img %>/*.png',
      '<%= config.path.src %>/<%= config.path.img %>/*.jpg',
      '<%= config.path.src %>/<%= config.path.img %>/*.gif'
    ],
    tasks: 'imagemin'
  },
};
