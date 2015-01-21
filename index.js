var gm = require('gm');

module.exports = function(opts) {
  return gm(this)
    .setFormat('png')
    .stream();
};