var extend = require('xtend');
var styles = extend(require('./common-styles'), {
  backgroundImage: 'url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAw0lEQVR4Xu3ZwQ2AMBADQei/aBACiSQNbB5DAwZzXLzmPLrrWqTP4lYS0e9BGWACZgeSaUxEfQKvA3aAHWAHTA4k+ygRtQQtQaeAY1AOEIQkQVFYFBaFReHRgSSWJ6JYAAtgASyABbAAFsACu7DA+iaKn7SZ5pMEGZDZv4GwCQhfglNgl1OgGgITYAJ0gjpBneDgQNJPJqJKUaWoUlQpqhRViipFwRAYAkNgCAyBod+BBMwSUTSIBtEgGkSDaBANbkGDN1tLQD3BEKWsAAAAAElFTkSuQmCC\')'
});
module.exports = require('./generic-button')(styles);
