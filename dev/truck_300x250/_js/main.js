import {end, spark} from '../../_common/js/Common.js'
import  truck from '../../_common/js/Truck.js'

function start() {
	const tl = truck()
	
	
	


	tl.from('#wrapper', .7, {y:'+=200'}, '+=1')

	tl.add('t2', '+=2.3')
	tl.from('#bg2', .3, {opacity:0}, 't2')
	tl.to('#t1', .3, {opacity:0}, 't2')
	tl.from('#t2', .5, {opacity:0}, 't2+=.3')
	
	tl.add(end())	
}

truck()
start()





module.exports = {};

