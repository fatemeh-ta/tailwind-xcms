module.exports = {
  xcmsFiles: {
    files: [
      {
        cwd: 'project/app/View',
        src: '**/*',
        dest: 'www-test/app/View',
        expand: true,
      },
    ],
  },
  init: {
    files: [
      {
        // require at all
        '_v2/lib/css/__tmp_font-awesome.css': 'bower_components/fontawesome/css/font-awesome.css',
        '_v2/lib/css/__tmp_owfont-regular.css': 'bower_components/owfont/css/owfont-regular.css',
        '_v2/lib/css/__tmp_normalize.css': 'bower_components/normalize.css/normalize.css',
        '_v2/lib/css/__tmp_video-js.css': 'bower_components/video.js/dist/video-js.css',
        '_v2/lib/css/__tmp_animate.css': 'bower_components/animate.css/animate.css',
        '_v2/lib/misc/vidoe-js/video-js.swf': 'bower_components/video.js/dist/video-js.swf',

        // optional
        '_v2/lib/css/__tmp_jquery.fancybox.css': 'bower_components/fancybox/source/jquery.fancybox.css',
        '_v2/lib/css/__tmp_lightslider.css': 'bower_components/lightslider/src/css/lightslider.css',
        '_v2/lib/css/__tmp_lightgallery.css': 'bower_components/lightgallery/dist/css/lightgallery.css',
        '_v2/lib/css/__tmp_owl.carousel.css': 'bower_components/owl.carousel/dist/assets/owl.carousel.css',
      },
      // require at all
      {
        cwd: 'bower_components/fontawesome/fonts',
        src: '*.{eot,ttf,woff,woff2,svg}',
        dest: '_v2/lib/fonts',
        filter: 'isFile',
        expand: true,
      },
      {
        cwd: 'bower_components/video.js/dist/font',
        src: '*.{eot,ttf,woff,woff2,svg}',
        dest: '_v2/lib/fonts',
        expand: true,
      },
      {
        cwd: 'bower_components/owfont/fonts',
        src: '*.{eot,ttf,woff,woff2,svg}',
        dest: '_v2/lib/fonts',
        expand: true,
      },

      // susy grid
      {
        cwd: 'bower_components/susy/sass',
        src: '**/*',
        dest: '_v2/lib/sass/susy',
        expand: true,
      },

      // optional

      // > fancybox
      {
        cwd: 'bower_components/fancybox/source',
        src: '*.{png,jpg,gif}',
        dest: '_v2/lib/img/fancybox',
        expand: true,
      },
      // > owl.carousel
      {
        cwd: 'bower_components/owl.carousel/dist/assets',
        src: '*.{png,jpg,gif}',
        dest: '_v2/lib/img/owl.carousel',
        expand: true,
      },

      // > lightgallery
      {
        cwd: 'bower_components/lightgallery/dist/img',
        src: '*.{png,jpg,gif}',
        dest: '_v2/lib/img/lightgallery',
        expand: true,
      },
      {
        cwd: 'bower_components/lightgallery/dist/fonts',
        src: '*.{eot,ttf,woff,woff2,svg}',
        dest: '_v2/lib/fonts',
        filter: 'isFile',
        expand: true,
      },

      // > lightslider
      {
        cwd: 'bower_components/lightslider/src/img',
        src: '*.{png,jpg,gif}',
        dest: '_v2/lib/img/lightslider',
        expand: true,
      },
    ],
  },
};
