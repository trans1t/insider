module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: [
        'site/js/**/*.js',
        '!site/js/lib**/*.js'
      ],
      options: {
        reporter: require('jshint-stylish'),
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default',['jshint']);
}
