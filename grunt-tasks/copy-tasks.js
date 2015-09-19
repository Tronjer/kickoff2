module.exports = {
  /*
  ** 
  */
  main: {
    files: [

      // index.html
      {
        expand: true,
				cwd: '<%= config.path.src %>',
				src: '*.html',
				dest: '<%= config.path.dist %>'
      },

      // all but index.html to /templates
      {
        expand: true,
        cwd: '<%= config.path.src %>',
        src: ['**/*.html','!*.html'],
        dest: '<%= config.path.dist %>/templates/'
      }
     
    ]
  }
};
