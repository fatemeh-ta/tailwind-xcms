module.exports = {
  initJs: {
    options: {
      separator: ';\n',
    },
    src: [
      // require at all dont remove these
      'bower_components/sprintf/src/sprintf.js',
      'bower_components/jquery/dist/jquery.js',
      'bower_components/moment/moment.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-sanitize/angular-sanitize.min.js',
      'bower_components/autobahn/index.js',
      'bower_components/video.js/dist/video.js',

      // popular packages
      'bower_components/jquery-slimscroll/jquery.slimscroll.js',
      'bower_components/fancybox/source/jquery.fancybox.js',
      'bower_components/jquery-mousewheel/jquery.mousewheel.js',
      'bower_components/jquery-sticky/jquery.sticky.js',

      'bower_components/lightslider/dist/js/lightslider.js',
      'bower_components/lightgallery/dist/js/lightgallery.js',
      // 'bower_components/owl.carousel/dist/owl.carousel.js',

      // ticker plugins, pick on of these NOT BOTH
      'bower_components/vticker/js/jquery.vticker.js',
      // 'bower_components/jquery.innerFade/jquery.innerfade.js',

      // !!! DO NOT REMOVE THIS LINES !!!
      process.env.XCMS_PATH + '/core-common/webroot-alias/common-js/classes/Clients.js',
      process.env.XCMS_PATH + '/core-common/webroot-alias/common-js/_v2/v2_common.js',
      process.env.XCMS_PATH + '/core-common/webroot-alias/common-js/classes/CommentForm.js',
      process.env.XCMS_PATH + '/core-common/webroot-alias/common-js/classes/Rate.js',
      process.env.XCMS_PATH + '/core-common/webroot-alias/common-js/_v2/GalleryDataV2.js',
    ],
    dest: '_v2/lib/js/frameworks.js',
  },

  /**
   * LANGUAGE CONCATS
   */
  'lang-ar': {
    src: [
      'bower_components/video.js/dist/lang/ar.js',
      'bower_components/moment/locale/ar.js',
    ],
    dest: '_v2/lib/js/lang-ar.js',
  },
  'lang-en': {
    src: [
      'bower_components/video.js/dist/lang/en.js',
    ],
    dest: '_v2/lib/js/lang-en.js',
  },
  'lang-fa': {
    src: [
      'bower_components/video.js/dist/lang/fa.js',
      'bower_components/moment/locale/fa.js',
    ],
    dest: '_v2/lib/js/lang-fa.js',
  },
  'lang-fr': {
    src: [
      'bower_components/video.js/dist/lang/fr.js',
      'bower_components/moment/locale/fr.js',
    ],
    dest: '_v2/lib/js/lang-fr.js',
  },
  'lang-ru': {
    src: [
      'bower_components/video.js/dist/lang/ru.js',
      'bower_components/moment/locale/ru.js',
    ],
    dest: '_v2/lib/js/lang-ru.js',
  },
};
