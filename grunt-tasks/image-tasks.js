module.exports = {
  dynamic: {
    files: [{
      expand: true,
      cwd: '<%= config.path.src %>/<%= config.path.img %>',
      src: ['**/*.{png,jpg,gif}'],
      dest: '<%= config.path.dist %>/img'
    }]
  }
};
