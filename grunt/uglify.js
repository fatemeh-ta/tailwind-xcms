module.exports = {
  /* frameworks */
  frameworks: {
    options: {
      banner: '/*! AASAAM Front Team, Generate at: <%= grunt.template.today("isoUtcDateTime") %> */',
      sourceMap: true,
      sourceMapName: '_v2/lib/js/frameworks.min.js.map',
    },
    files: {
      '_v2/lib/js/frameworks.min.js': [
        '_v2/lib/js/frameworks.js',
      ],
    },
  },

  /* lang-ar */
  'lang-ar': {
    options: {
      banner: '/*! AASAAM Front Team, Generate at: <%= grunt.template.today("isoUtcDateTime") %> */',
      sourceMap: true,
      sourceMapName: '_v2/lib/js/lang-ar.min.js.map',
    },
    files: {
      '_v2/lib/js/lang-ar.min.js': [
        '_v2/lib/js/lang-ar.js',
      ],
    },
  },
  /* lang-en */
  'lang-en': {
    options: {
      banner: '/*! AASAAM Front Team, Generate at: <%= grunt.template.today("isoUtcDateTime") %> */',
      sourceMap: true,
      sourceMapName: '_v2/lib/js/lang-en.min.js.map',
    },
    files: {
      '_v2/lib/js/lang-en.min.js': [
        '_v2/lib/js/lang-en.js',
      ],
    },
  },
  /* lang-fa */
  'lang-fa': {
    options: {
      banner: '/*! AASAAM Front Team, Generate at: <%= grunt.template.today("isoUtcDateTime") %> */',
      sourceMap: true,
      sourceMapName: '_v2/lib/js/lang-fa.min.js.map',
    },
    files: {
      '_v2/lib/js/lang-fa.min.js': [
        '_v2/lib/js/lang-fa.js',
      ],
    },
  },
  /* lang-fr */
  'lang-fr': {
    options: {
      banner: '/*! AASAAM Front Team, Generate at: <%= grunt.template.today("isoUtcDateTime") %> */',
      sourceMap: true,
      sourceMapName: '_v2/lib/js/lang-fr.min.js.map',
    },
    files: {
      '_v2/lib/js/lang-fr.min.js': [
        '_v2/lib/js/lang-fr.js',
      ],
    },
  },
  /* lang-ru */
  'lang-ru': {
    options: {
      banner: '/*! AASAAM Front Team, Generate at: <%= grunt.template.today("isoUtcDateTime") %> */',
      sourceMap: true,
      sourceMapName: '_v2/lib/js/lang-ru.min.js.map',
    },
    files: {
      '_v2/lib/js/lang-ru.min.js': [
        '_v2/lib/js/lang-ru.js',
      ],
    },
  },

  /* main */
  main: {
    options: {
      banner: '/*! AASAAM Front Team, Generate at: <%= grunt.template.today("isoUtcDateTime") %> */',
      sourceMap: true,
      sourceMapName: '_v2/js/main.min.js.map',
    },
    files: {
      '_v2/js/main.min.js': [
        '_v2/js/main.js',
      ],
    },
  },
};
