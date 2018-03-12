(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

TweenLite.defaultEase = Power2.easeInOut;
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

function spark() {
	var time = .28;
	var tlSparkMain = new TimelineMax({ repeat: 0, yoyo: true });
	var tlSparkFlash = new TimelineMax();
	// tlSparkFlash.to('#spark', .07, {opacity:0.8, yoyo:true, repeat:77, rotation:'+=0', scale:.95})

	var tlSparkBez = new TimelineMax();
	var values = [{ x: 178, y: -27 }, { x: 130, y: 3 }, { x: 130, y: 3 }, { x: 84, y: 4 }];

	var bez = {
		bezier: { type: "cubic", values: values }
	};

	var delay = 0;
	tlSparkBez.to("#spark", time, _extends({}, bez, { ease: Bounce.easeInOut }));
	tlSparkMain.add(tlSparkBez, delay);
	tlSparkMain.to('#bg-spark', time * 1.2, { clip: "rect(0px 300px 90px 0px)", ease: Bounce.easeInOut }, delay);
	tlSparkMain.from('#sparkMain', .1, { opacity: .8, yoyo: true, repeat: 999 }, delay);

	var tlMainMain = new TimelineMax();
	tlMainMain.fromTo('#sparkMain', .3, { opacity: 0 }, { opacity: 1, scale: 1 }, 1);
	tlMainMain.add(tlSparkMain, '+=0');
	return tlMainMain;
}

function end() {
	var tlEnd = new TimelineMax();

	tlEnd.add('shift', '+=2');
	tlEnd.set('.frame2', { opacity: 1 }, 'shift');
	tlEnd.from('.frame2', .8, { y: size.h }, 'shift');
	tlEnd.to('#wrapper', .8, { y: "-=" + size.h }, 'shift');
	tlEnd.from('.frame2 p', .3, { opacity: 0 });

	tlEnd.to('.frame2 p', .3, { opacity: 0 }, '+=2');
	tlEnd.to('.frame3', .3, { opacity: 1 });

	return tlEnd;
}

exports.end = end;
exports.spark = spark;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/Common.js');

function start() {
	var tl = new TimelineMax();

	TweenMax.to('#sparkMain', .05, { opacity: .8, yoyo: true, repeat: 999 });

	tl.set('.frame1', { opacity: 1 });

	tl.from('#wrapper', .7, { y: '+=200' }, '+=1');

	tl.add('t2', '+=2.3');
	tl.from('#bg2', .3, { opacity: 0 }, 't2');
	tl.to('#t1', .3, { opacity: 0 }, 't2');
	tl.from('#t2', .5, { opacity: 0 }, 't2+=.3');

	tl.add(_commonJsCommonJs.tlEnd);
}

start();

module.exports = {};

},{"../../_common/js/Common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
