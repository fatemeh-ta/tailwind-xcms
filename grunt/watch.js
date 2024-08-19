module.exports = {
  'xcms-watch': {
    files: [
      '_v2/css/**/*.scss',
      'project/app/View/**/*',
    ],
    tasks: [
      'sass',
      'copy:xcmsFiles',
    ],
    options: {
      spawn: false,
    },
  },
  'xcms-watch-sass': {
    files: [
      '_v2/css/**/*.scss',
    ],
    tasks: [
      'sass',
    ],
    options: {
      spawn: false,
    },
  },
  'xcms-watch-view': {
    files: [
      'project/app/View/**/*',
    ],
    tasks: [
      'copy:xcmsFiles',
    ],
    options: {
      spawn: false,
    },
  },
};
