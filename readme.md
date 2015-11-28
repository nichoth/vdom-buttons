# vdom buttons

A few buttons

[demo](https://7811c3c88cbd14e040291953617e1517bec9bad6.htmlb.in)


## install

    $ npm install vdom-buttons


## example
```js
var vdom = require('virtual-dom');
var h = vdom.h;
var buttons = require('vdom-buttons');

var loop = require('main-loop')( {}, render, vdom );
document.getElementById('content').appendChild(loop.target);

function onClick(ev) {
  ev.preventDefault();
  console.log('click', ev.target.href);
}

function render() {
  return h('div', [
    buttons.create(h, {href: '/example', onClick: onClick}),
    buttons.delete(h, {onClick: onClick}),
    buttons.back(h, {onClick: onClick}),
    buttons.edit(h, {onClick: onClick})
  ]);
}
```
