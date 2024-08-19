module.exports = {
  fancybox: {
    files: {
      '_v2/lib/css/__tmp_jquery.fancybox.css': '_v2/lib/css/__tmp_jquery.fancybox.css',
    },
    options: {
      replacements: [
        {
          pattern: /url\(["']([^'"]+)["']\)/igm,
          replacement: 'url(\'../lib/img/fancybox/$1\')',
        },
      ],
    },
  },
  'owl.carousel': {
    files: {
      '_v2/lib/css/__tmp_owl.carousel.css': '_v2/lib/css/__tmp_owl.carousel.css',
    },
    options: {
      replacements: [
        {
          pattern: /url\(["']([^'"]+)["']\)/igm,
          replacement: 'url(\'../lib/img/owl.carousel/$1\')',
        },
      ],
    },
  },
  lightslider: {
    files: {
      '_v2/lib/css/__tmp_lightslider.css': '_v2/lib/css/__tmp_lightslider.css',
    },
    options: {
      replacements: [
        {
          pattern: /url\(["']\.\.\/img\/([^'"]+)["']\)/igm,
          replacement: 'url(\'../lib/img/lightslider/$1\')',
        },
      ],
    },
  },
  lightgallery: {
    files: {
      '_v2/lib/css/__tmp_lightgallery.css': '_v2/lib/css/__tmp_lightgallery.css',
    },
    options: {
      replacements: [
        {
          pattern: /url\(["']\.\.\/img\/([^'"]+)["']\)/igm,
          replacement: 'url(\'../lib/img/lightgallery/$1\')',
        },
      ],
    },
  },
  removeHeads: {
    files: {
      '_v2/lib/css/': '_v2/lib/css/*.css',
    },
    options: {
      replacements: [
        {
          pattern: /(@font-face[^}]+})/gm,
          replacement: '',
        },
        {
          pattern: /@charset.+;/gm,
          replacement: '',
        },
        {
          pattern: /[\n]+/gm,
          replacement: '\n',
        },
      ],
    },
  },
};
