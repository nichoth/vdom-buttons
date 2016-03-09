var vdom = require('virtual-dom');
var h = vdom.h;
var buttons = require('../');

var loop = require('main-loop')( {}, render, vdom );
document.getElementById('content').appendChild(loop.target);


function render() {
  return h('div', Object.keys(buttons).map(k => {
    // use normal hyperscript attributes
    return buttons[k](h, {
      onclick: ev => console.log('click', k),
      style: {
        marginRight: '1em'
      }
    });
  }));
}
