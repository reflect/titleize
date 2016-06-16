'use strict';
module.exports = function (str) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  var cb = function(m) {
    return m.toUpperCase();
  };

  // Remove any separators and turn them in to spaces.
  return str.replace(/(-|_)/g, ' ').
    replace(/\s+/g, ' ').
    toLowerCase().
    replace(/(?:^|\s|-|_|\()\w/g, cb);
};
