module.exports = {
  /**
  ** Uglifies custom JS Files
  **/
  build: {
    files: [
      {'<%= config.path.dist %>/js/main.js': '<%= config.path.src %>/**/*.js'}
    ]
  }
};
