(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function start() {

	TweenLite.defaultEase = Power2.easeInOut;
	var banner = document.getElementById('banner');
	var size = { w: banner.offsetWidth, h: banner.offsetHeight };

	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });
	var tlSpark = new TimelineMax({ repeat: 222, yoyo: true });
	tlSpark.to('#spark', .05, { opacity: .96 });
	tl.add('remove-spark', '+=.6');
	tl.to('#bg-spark', .3, { opacity: 0 }, 'remove-spark');
	tl.call(function () {
		tlSpark.pause();
		TweenLite.to('#spark', .3, { opacity: 0 });
	}, [], 'remove-spark');

	tl.from('#wrapper', .7, { y: '+=200' });

	tl.add('add-spark', '+=2.3');
	tl.to('#t1', .3, { opacity: 0 }, 'add-spark');
	tl.from('#t2', .5, { opacity: 0 }, 'add-spark+=.3');
	tl.to('#bg-spark', .3, { opacity: 1 }, 'add-spark');

	tl.call(function () {
		TweenLite.to('#spark', .3, { opacity: 1 });
		// tlSpark.resume()
	}, [], 'add-spark');

	tl.add('shift', '+=2');
	tl.set('.frame2', { opacity: 1 }, 'shift');
	tl.from('.frame2', .8, { y: size.h }, 'shift');
	tl.to('#wrapper', .8, { y: '-=' + size.h }, 'shift');
	tl.from('.frame2 p', .3, { opacity: 0 });

	tl.to('.frame2 p', .3, { opacity: 0 }, '+=2');
	tl.to('.frame3', .3, { opacity: 1 });
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
