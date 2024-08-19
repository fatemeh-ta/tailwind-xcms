module.exports = {
  "xcms-watch": {
    files: ["_v2/css/**/*.scss", "project/app/View/**/*"],
    tasks: ["sass", "copy:xcmsFiles", "postcss"],
    options: {
      spawn: false,
    },
  },
  "xcms-watch-sass": {
    files: ["_v2/css/**/*.scss"],
    tasks: ["sass", "postcss"],
    options: {
      spawn: false,
    },
  },
  "xcms-watch-view": {
    files: ["project/app/View/**/*"],
    tasks: ["copy:xcmsFiles", "postcss"],
    options: {
      spawn: false,
    },
  },
};
