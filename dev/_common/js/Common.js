
TweenLite.defaultEase = Power2.easeInOut
const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}


const tlEnd = new TimelineMax()

	

	
	
	

	tlEnd.add('shift', '+=2')
	tlEnd.set('.frame2', {opacity:1}, 'shift')
	tlEnd.from('.frame2', .8, {y:size.h}, 'shift')
	tlEnd.to('#wrapper', .8, {y:`-=${size.h}`}, 'shift')
	tlEnd.from('.frame2 p', .3, {opacity:0})

	tlEnd.to('.frame2 p', .3, {opacity:0}, '+=2')
	tlEnd.to('.frame3', .3, {opacity:1})


const tlSpark = new TimelineMax({repeat:222, yoyo:true})
tlSpark.to('#spark', .05, {opacity:.9})
// tlSpark.pause()

export {tlEnd, tlSpark}