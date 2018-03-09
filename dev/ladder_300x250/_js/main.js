import {tlEnd, tlSpark} from '../../_common/js/Common.js'

function start() {

	


	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	const tlSpark = new TimelineMax()
	TweenMax.to('#sparkMain', .05, {opacity:.85, yoyo:true, repeat:32})	
	tlSpark.to('#bg-spark', .7, {clip: `rect(0px 300px 90px 0px)`})


	
	tl.add(tlEnd)	
	

	

}

start()



module.exports = {};

