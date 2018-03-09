function start() {

	TweenLite.defaultEase = Power2.easeInOut
	const banner = document.getElementById('banner')
	const size = {w:banner.offsetWidth, h:banner.offsetHeight}


	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	const tlSpark = new TimelineMax({repeat:222, yoyo:true})
	tlSpark.to('#spark', .05, {opacity:.96})
	tl.add('remove-spark', '+=.6')
	tl.to('#bg-spark', .3, {opacity:0}, 'remove-spark')
	tl.call(()=>{
		tlSpark.pause()
		TweenLite.to('#spark', .3, {opacity:0})
	}, [], 'remove-spark')

	tl.from('#wrapper', .7, {y:'+=200'})
	

	tl.add('add-spark', '+=2.3')
	tl.to('#t1', .3, {opacity:0}, 'add-spark')
	tl.from('#t2', .5, {opacity:0}, 'add-spark+=.3')
	tl.to('#bg-spark', .3, {opacity:1}, 'add-spark')
	
	tl.call(()=>{
		TweenLite.to('#spark', .3, {opacity:1})
		// tlSpark.resume()
		
	}, [], 'add-spark')

	tl.add('shift', '+=2')
	tl.set('.frame2', {opacity:1}, 'shift')
	tl.from('.frame2', .8, {y:size.h}, 'shift')
	tl.to('#wrapper', .8, {y:`-=${size.h}`}, 'shift')
	tl.from('.frame2 p', .3, {opacity:0})

	tl.to('.frame2 p', .3, {opacity:0}, '+=2')
	tl.to('.frame3', .3, {opacity:1})

}

start()



module.exports = {};

