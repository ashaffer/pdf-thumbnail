var gm = require('gm');

module.exports = function(source, opts, cb) {
  gm(source)
    .toBuffer('png', cb);
};