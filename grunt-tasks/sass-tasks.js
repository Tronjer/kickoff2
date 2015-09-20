module.exports = {
  dev: {
    options: {
      importPath: [
      '<%= config.path.bower_components %>/angular-material',
      '<%= config.path.bower_components %>/font-awesome/scss'
      ],
      sassDir: '<%= config.path.src %>/<%= config.path.styles %>',
      cssDir: '<%= config.path.dist %>/css',
      imagesDir: '<%= config.path.dist %>/img',
      outputStyle: 'compressed',
      relativeAssets: true
    }
  }
};
