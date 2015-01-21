var gm = require('gm');

module.exports = function(source, opts, cb) {
  if('function' === typeof opts) {
    cb = opts;
    opts = {};
  }

  gm(source)
    .toBuffer('png', cb);
};