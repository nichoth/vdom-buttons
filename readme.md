# vdom buttons

A few buttons


## install

    $ npm install vdom-buttons


## example
    
```js
var vdom = require('virtual-dom');
var h = vdom.h;
var Buttons = require('vdom-buttons');

var state = Buttons({

});

var loop = require('main-loop')( state(), Buttons.render, vdom );
state(loop.update);
document.getElementById('content').appendChild(loop.target);
```
