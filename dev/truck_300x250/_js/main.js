import {tlEnd, tlSpark} from '../../_common/js/Common.js'

function start() {


	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	
	tl.add('remove-spark', '+=.6')
	
	// tl.call(()=>{
	// 	tlSpark.pause()
	// 	TweenLite.to('#spark', .3, {opacity:0})
	// }, [], 'remove-spark')

	tl.add('t1', '+=1')
	tl.from('#wrapper', .7, {y:'+=200'}, 't1')
	tl.from('#spark', .5, {opacity:0}, 't1')
	tl.add(tlSpark)

	

	tl.add(tlEnd, 't1')

}

start()



module.exports = {};

