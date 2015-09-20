module.exports = {
  
  options: {
    //jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },
  all: ['Gruntfile.js', '<%= config.path.src %>/**/*.js', '!<%= config.path.src %>/app.js']
};
