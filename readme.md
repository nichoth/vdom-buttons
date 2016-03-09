# vdom buttons

A few buttons, virtual-dom style.

[demo](http://demos.nichoth.com/vdom-buttons)

## install

    $ npm install vdom-buttons


## example
```js
var vdom = require('virtual-dom');
var h = vdom.h;
var buttons = require('vdom-buttons');
// or require one thing
var edit = require('vdom-buttons/lib/edit');

var loop = require('main-loop')( {}, render, vdom );
document.getElementById('content').appendChild(loop.target);

function render() {
  return h('div', Object.keys(buttons).map(k => {
    // use normal hyperscript attributes
    return buttons[k](h, {
      onclick: ev => {
        ev.preventDefault();
        console.log('click', k);
      },
      style: {
        marginRight: '1em'
      }
    });
  }));
}
```
