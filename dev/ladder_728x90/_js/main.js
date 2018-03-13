import {end, spark} from '../../_common/js/Common.js'

function start() {


	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	

	spark()
	
	

	
	tl.add('t2', 2)
	tl.from('#t1', .7, {opacity:0}, 't2')
	tl.to('#t1', .3, {opacity:0}, 't2+=4.5')
	tl.from('#t2', .5, {opacity:0}, 't2+=4.7')
	
	tl.add(end(), '+=1')	
	

	

}


start()