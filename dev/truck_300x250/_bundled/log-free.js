(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

TweenLite.defaultEase = Power2.easeInOut;
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

var tlEnd = new TimelineMax();
tlEnd.from('#wrapper', .7, { y: '+=200' }, '+=1');

tlEnd.add('t2', '+=2.3');
tlEnd.to('#t1', .3, { opacity: 0 }, 't2');
tlEnd.from('#t2', .5, { opacity: 0 }, 't2+=.3');

tlEnd.add('shift', '+=2');
tlEnd.set('.frame2', { opacity: 1 }, 'shift');
tlEnd.from('.frame2', .8, { y: size.h }, 'shift');
tlEnd.to('#wrapper', .8, { y: '-=' + size.h }, 'shift');
tlEnd.from('.frame2 p', .3, { opacity: 0 });

tlEnd.to('.frame2 p', .3, { opacity: 0 }, '+=2');
tlEnd.to('.frame3', .3, { opacity: 1 });

var tlSpark = new TimelineMax({ repeat: 222, yoyo: true });
tlSpark.to('#spark', .05, { opacity: .9 });
// tlSpark.pause()

exports.tlEnd = tlEnd;
exports.tlSpark = tlSpark;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/Common.js');

function start() {

	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });

	tl.add('remove-spark', '+=.6');

	// tl.call(()=>{
	// 	tlSpark.pause()
	// 	TweenLite.to('#spark', .3, {opacity:0})
	// }, [], 'remove-spark')

	tl.add('t1', '+=1');
	tl.from('#wrapper', .7, { y: '+=200' }, 't1');
	tl.from('#spark', .5, { opacity: 0 }, 't1');
	tl.add(_commonJsCommonJs.tlSpark);

	tl.add(_commonJsCommonJs.tlEnd, 't1');
}

start();

module.exports = {};

},{"../../_common/js/Common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
