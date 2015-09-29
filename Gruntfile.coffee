module.exports = (grunt) ->
  require('load-grunt-tasks')(grunt)
  require('time-grunt')(grunt)

  path = require('path')

  # Project configuration.
  grunt.initConfig

    appConfig:
      app: require('./bower.json').appPath || 'app'
      dist: 'dist'


    sass:
      options:
        sourcemap: 'none',
        update: true
      dist:
        files:
          'app/css/main.css': 'app/css/sass/main.scss'


    clean:
      rebuild:
        src: 'dist'
    

    copy:
      dist:
        option:
          style: 'expanded'
        files: [
          {
            expand: true
            dot: true
            cwd: '<%= appConfig.app %>'
            dest: '<%= appConfig.dist %>'
            src: [
              'js/**/*.js',
              'css/*.css',
              'template/**/*.html',
              '*.html',
              'views/**/*.html'
            ]
          }
        ]


    watch:
      sass:
        files: "app/css/**/*.scss",
        task: ['sass']


  grunt.registerTask 'default', ['clean:rebuild',  'copy:dist', 'sass', 'watch']
