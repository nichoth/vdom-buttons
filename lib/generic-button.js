var extend = require('xtend');

module.exports = function render(h, data) {
  var attrs = extend({
    href: '#',
  }, data);

  return h('a.vdom-button', attrs, [])
}
