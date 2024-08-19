/**
 * @author Muhammad Hussein Fattahizadeh <m@mhf.ir>
 * @copyright (c) 2016, Muhammad Hussein Fattahizadeh <m@mhf.ir>
 */

module.exports = function (grunt) {
  grunt.initConfig({
    // bower: require("./grunt/bower.js"),
    concat: require("./grunt/concat.js"),
    copy: require("./grunt/copy.js"),
    "string-replace": require("./grunt/string-replace.js"),
    shell: require("./grunt/shell.js"),
    stripCssComments: require("./grunt/stripCssComments.js"),
    uglify: require("./grunt/uglify.js"),
    sass: require("./grunt/sass.js"),
    watch: require("./grunt/watch.js"),

    postcss: {
      options: {
        map: true,
        processors: [require("tailwindcss"), require("autoprefixer")],
      },
      dist: {
        src: "./_v2/css/styles/input.css",
        dest: "./_v2/css/styles/output.css",
      },
    },

    clean: {
      build: ["dist"],
    },
  });

  // grunt.loadNpmTasks("grunt-bower-task");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-shell");
  grunt.loadNpmTasks("grunt-string-replace");
  grunt.loadNpmTasks("grunt-strip-css-comments");
  grunt.loadNpmTasks("@lodder/grunt-postcss");
  grunt.loadNpmTasks("grunt-contrib-clean");

  // grunt.registerTask("bower-init", ["bower:init"]);

  grunt.registerTask("xcmswatch", ["watch"]);

  grunt.registerTask("build", [
    // download
    // "bower:init",
    "clean:build",
    // shell prepare
    "shell:prepare",

    // concat of js files
    "concat:initJs",

    // concat languages
    "concat:lang-ar",
    "concat:lang-en",
    "concat:lang-fa",
    "concat:lang-fr",
    "concat:lang-ru",

    // copy first files
    "copy:init",

    // remove global heads like fontface you must rematch fontface on your own font-faces
    "string-replace:removeHeads",

    // then special replace for libs
    "string-replace:fancybox",
    "string-replace:lightslider",
    "string-replace:lightgallery",
    "string-replace:owl.carousel",

    // then remove commands and copy to css/lib
    "stripCssComments:lib",

    "uglify",

    "sass",
    "postcss",
    "shell:clean-temporary-css",
    "shell:stable-version-change",
  ]);
};
