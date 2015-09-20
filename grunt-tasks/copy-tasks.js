module.exports = {
  main: {
    files: [

      // html
      {
        expand: true,
				cwd: '<%= config.path.src %>',
				src: '**/*.html',
				dest: '<%= config.path.dist %>'
      },
      
      // fontawesome
      {
        expand: true,
        cwd: '<%= config.path.bower_components %>/font-awesome/fonts',
        src: ['**'],
        dest: '<%= config.path.dist %>/fonts/'
      }
    ]
  }
};
