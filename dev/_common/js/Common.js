
TweenLite.defaultEase = Power2.easeInOut
const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}


const tlEnd = new TimelineMax()
tlEnd.from('#wrapper', .7, {y:'+=200'}, '+=1')
	

	tlEnd.add('t2', '+=2.3')
	tlEnd.to('#t1', .3, {opacity:0}, 't2')
	tlEnd.from('#t2', .5, {opacity:0}, 't2+=.3')
	
	
	

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