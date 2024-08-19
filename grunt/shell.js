module.exports = {
  prepare: {
    command: ([
      'rm -rf _v2/lib',
      'rm -rf _v2/css/lib',
      'mkdir -p _v2/lib',
      'mkdir -p _v2/css/lib',
      'echo \'$compileHash: "\'$(date +%s | sha256sum | base64 | head -c 8)\'";\' > _v2/css/lib/_compilehash.scss',
      'rm -rf _v2/css/*.css',
      'rm -rf _v2/css/*.css.map',
      'rm -rf _v2/js/*.min.js',
      'rm -rf _v2/js/*.map',
    ]).join(' && '),
  },
  'clean-temporary-css': {
    command: ([
      'find _v2/lib -name __tmp_* -delete',
      'find _v2/lib -type d -empty -delete',
      'find _v2/ -name \'*.php\' -delete',
    ]).join(' && '),
  },
  'stable-version-change': {
    command: ([
      'echo \'<?php return "\'$(date +%s | sha256sum | base64 | head -c 16)\'";\' > www-stable/app/files/settings/version.php'
    ]).join(' && '),
  },
};
