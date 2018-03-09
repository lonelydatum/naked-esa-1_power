import {tlEnd} from '../../_common/js/Common.js'

function start() {
const tl = new TimelineMax()

	TweenMax.to('#sparkMain', .05, {opacity:.8, yoyo:true, repeat:43})	


	tl.set('.frame1', {opacity:1})
	
	
	


	tl.from('#wrapper', .7, {y:'+=200'}, '+=1')

	tl.add('t2', '+=2.3')
	tl.from('#bg2', .3, {opacity:0}, 't2')
	tl.to('#t1', .3, {opacity:0}, 't2')
	tl.from('#t2', .5, {opacity:0}, 't2+=.3')
	
	tl.add(tlEnd)	
}

start()



module.exports = {};

