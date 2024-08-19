module.exports = {
  options: {
    style: 'nested',
    sourcemap: 'auto',
  },
  dist: {
    files: {
      '_v2/css/main_rtl.css': '_v2/css/main_rtl.scss',
      '_v2/css/main_ltr.css': '_v2/css/main_ltr.scss',
    },
  },
};
