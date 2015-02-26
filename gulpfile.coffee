bower        = require 'bower'
gulp         = require 'gulp'
autoprefixer = require 'gulp-autoprefixer'
coffee       = require 'gulp-coffee'
coffeelint   = require 'gulp-coffeelint'
concat       = require 'gulp-concat'
flatten      = require 'gulp-flatten'
jade         = require 'gulp-jade'
minifycss    = require 'gulp-minify-css'
notify       = require 'gulp-notify'
plumber      = require 'gulp-plumber'
sass         = require 'gulp-ruby-sass'
uglify       = require 'gulp-uglify'
watch        = require 'gulp-watch'
rimraf       = require 'rimraf'
sequence     = require 'run-sequence'
express      = require 'express'
liveReload   = require 'connect-livereload'
util         = require 'gulp-util'
tinyLr       = require 'tiny-lr'

server = undefined

gulp.task 'bower', ->
  bower.commands.install().on 'end', (installed) ->
    gulp.src [
      'bower_components/angular/angular.min.js'
      'bower_components/angular/angular.min.js.map'
      'bower_components/angular/angular-csp.css']
      .pipe gulp.dest './dst/lib/angular/'

    gulp.src [
      'bower_components/bootstrap/dist/css/bootstrap.min.css'
      'bower_components/bootstrap/dist/css/bootstrap.css.map'
      'bower_components/bootstrap/dist/js/bootstrap.min.js'
    ]
      .pipe gulp.dest './dst/lib/bootstrap/'

    gulp.src [
      'bower_components/angulartics/dist/angulartics.min.js'
      'bower_components/angulartics/dist/angulartics-ga.min.js']
      .pipe gulp.dest './dst/lib/angulartics/'

    gulp.src [
      'bower_components/angular-ui-router/release/angular-ui-router.min.js']
      .pipe gulp.dest './dst/lib/angular-ui-router/'

    gulp.src [
      'bower_components/angular-animate/angular-animate.min.js'
      'bower_components/angular-animate/angular-animate.min.js.map'
    ]
      .pipe gulp.dest './dst/lib/angular-animate/'

    gulp.src [
      'bower_components/fontawesome/fonts/*'
    ]
      .pipe gulp.dest './dst/lib/fonts/'

    gulp.src [
      'bower_components/fontawesome/css/font-awesome.min.css'
    ]
      .pipe gulp.dest './dst/lib/fontawesome/'

    gulp.src [
      'bower_components/jquery/dist/jquery.min.js'
      'bower_components/jquery/dist/jquery.min.map'
    ]
      .pipe gulp.dest './dst/lib/jquery/'

gulp.task 'clean', (callback)->
  rimraf './dst', callback

gulp.task 'coffee', ->
  gulp.src 'src/coffee/**/*.coffee'
    .pipe plumber {errorHandler: notify.onError('<%= error.message %>')}
    .pipe coffeelint()
    .pipe coffeelint.reporter()
    .pipe concat 'app.coffee'
    .pipe coffee()
    .pipe uglify {mangle: false}
    .pipe plumber.stop()
    .pipe gulp.dest 'dst/js/'

gulp.task 'express', ->
  server = express()
  server.use liveReload()
  server.use express.static('./dst')
  server.all '/*', (req, res)->
    res.sendFile 'index.html', root: 'dst'

  server.listen 3939
  util.log util.colors.green('Server started http://0.0.0.0:3939')

  lr = tinyLr()
  lr.listen 35729
  util.log util.colors.green('LiveReload started on port 35729')

gulp.task 'copy', ->
  gulp.src 'src/image/**', {base: 'src/image'}
    .pipe gulp.dest 'dst/image/'
  gulp.src 'src/robot/**'
    .pipe gulp.dest 'dst/'

gulp.task 'jade', ->
  gulp.src 'src/jade/*.jade'
    .pipe plumber {errorHandler: notify.onError('<%= error.message %>')}
    .pipe jade()
    .pipe plumber.stop()
    .pipe gulp.dest 'dst/'

gulp.task 'jade.view', ->
  gulp.src 'src/jade/view/**/*.jade'
    .pipe plumber()
    .pipe jade
      basedir: 'src/jade/'
    .pipe plumber.stop()
    .pipe gulp.dest 'dst/view/'

gulp.task 'livereload', ->
  gulp.src ''
    .pipe connect.reload()

gulp.task 'sass', ->
  gulp.src 'src/sass/*.sass'
    .pipe plumber {errorHandler: notify.onError('<%= error.message %>')}
    .pipe concat 'style.sass'
    .pipe sass({noCache: true, "sourcemap=none": true})
    .pipe autoprefixer ['last 2 version']
    .pipe minifycss()
    .pipe plumber.stop()
    .pipe gulp.dest 'dst/css/'

gulp.task 'watch', ->
  gulp.watch 'src/jade/**', ['jade']
  gulp.watch 'src/jade/view/**', ['jade.view']
  gulp.watch 'src/coffee/**', ['coffee']
  gulp.watch 'src/sass/**', ['sass']
  gulp.watch 'src/image/**', ['copy']

# Build Task
gulp.task 'build', ['clean'], -> 
  sequence ['bower', 'copy', 'sass', 'coffee', 'jade', 'jade.view']

# Develop Task
gulp.task 'server', ->
  sequence ['build'], 'watch', 'express'
