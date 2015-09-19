module.exports = {
  /**
  ** Minifies Angular libs
  **/
  options: {
  	singleQuotes: true
  },
  files: {
  	src: [
  		'<%= config.path.bower_components %>/angular/angular.min.js',
      '<%= config.path.bower_components %>/angular-route/angular-route.min.js',
    	'<%= config.path.bower_components %>/angular-material/angular-material.min.js',
    	'<%= config.path.bower_components %>/angular-animate/angular-animate.min.js',
    	'<%= config.path.bower_components %>/angular-aria/angular-aria.min.js',
  	],
  	dest: '<%= config.path.dist %>/js/libs.js'
  }
};
