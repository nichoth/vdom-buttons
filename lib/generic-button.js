var extend = require('xtend');

module.exports = function(style) {
  return render.bind(null, style);
};



function render(defaults, h, state) {
  state = state || {};
  state.onClick = state.onClick || function(){};
  return h('a', {
    href: state.href || '#',
    style: extend(defaults, state.style),
    onclick: state.onClick
  }, []);
};
