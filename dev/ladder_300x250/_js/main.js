import {tlEnd, tlSpark} from '../../_common/js/Common.js'

function start() {

	


	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	const tlSpark = new TimelineMax()
	TweenMax.to('#sparkMain', .05, {opacity:.85, yoyo:true, repeat:32})	
	tlSpark.to('#bg-spark', .7, {clip: `rect(0px 300px 90px 0px)`})


	tl.from('#wrapper', .7, {y:'+=200'}, '+=1')
	tl.add('t2', '+=2.3')
	tl.to('#t1', .3, {opacity:0}, 't2')
	tl.from('#t2', .5, {opacity:0}, 't2+=.3')
	
	tl.add(tlEnd)	
	

	

}

start()



module.exports = {};

