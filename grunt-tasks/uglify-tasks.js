module.exports = {
  /**
  ** Uglifies JS Files
  **/
  build: {
    /*
  	options: {
  		mangle: false
  	},
    */
    files: [
      //{'<%= config.path.dist %>/js/libs.js': '<%= config.path.dist %>/js/libs.js'}
      //src: '<%= config.path.src %>/**/*.js',
      //dest: '<%= config.path.dist %>/js/main.js'
      {'<%= config.path.dist %>/js/main.js': '<%= config.path.src %>/**/*.js'}
    ]
  }
};
