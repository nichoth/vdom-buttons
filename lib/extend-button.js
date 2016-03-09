var button = require('./generic-button');
var extend = require('xtend');

module.exports = function extendButton(attrs) {
  return function(h, data) {
    var d = extend(attrs, data);
    d.style = extend(attrs.style, data.style);
    return button(h, d);
  };
}

