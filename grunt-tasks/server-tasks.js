module.exports = {
  all: {
    options: {
      hostname: '0.0.0.0',
      bases: ['<%= config.path.dist %>'],
      livereload: true,
    }
  }
};
