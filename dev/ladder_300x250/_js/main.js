import {tlEnd} from '../../_common/js/Common.js'

function start() {

	
	TweenMax.to('#sparkMain', .05, {opacity:.85, yoyo:true, repeat:32})	

	const tl = new TimelineMax()
	
	const tlSparkBack = new TimelineMax()
	tlSparkBack.to('#spark', .2, {x:110, y:0, yoyo:true, repeat:3, opacity:.7, ease:Linear.easeNone})

	tl.set('.frame1', {opacity:1})
	
	
	

	tl.add('t1', '+=1')
	tl.to('#bg-spark', .8, {clip: `rect(0px 300px 90px 0px)`}, 't1')
	tl.from('#wrapper', .7, {y:'+=200'}, 't1')

	tl.add('t2', '+=2.3')
	tl.add(tlSparkBack, 't2')
	tl.to('#t1', .3, {opacity:0}, 't2')
	tl.from('#t2', .5, {opacity:0}, 't2+=.3')
	
	tl.add(tlEnd)	
	

	

}

start()



module.exports = {};

