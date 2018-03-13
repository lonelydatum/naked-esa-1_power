
TweenLite.defaultEase = Power2.easeInOut
const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}



function spark(){
	const time = .28
	const tlSparkMain = new TimelineMax({repeat:0, yoyo:true})
	const tlSparkFlash = new TimelineMax()
	// tlSparkFlash.to('#spark', .07, {opacity:0.8, yoyo:true, repeat:77, rotation:'+=0', scale:.95})

	const tlSparkBez = new TimelineMax()
	const values = [
			{x:178, y:-27}, 
			{x:130, y:3}, 
			{x:130, y:3}, 
			{x:84, y:4},
		]
		
	const bez = {
		bezier:{type:"cubic", values}
	}


	const delay = 0
	// tlSparkBez.to("#spark", time, {...bez, ease:Bounce.easeInOut});
	// tlSparkMain.add(tlSparkBez, delay)
	tlSparkMain.to('#bg-spark', time*1.2, {clip: `rect(0px 300px 90px 0px)`, ease:Bounce.easeInOut}, delay)
	tlSparkMain.from('#sparkMain', .1, {opacity:.8, yoyo:true, repeat:999}, delay)
	
	const tlMainMain = new TimelineMax()
	tlMainMain.fromTo('#sparkMain', .3, {opacity:0}, {opacity:1, scale:1}, 1)
	tlMainMain.add(tlSparkMain, '+=0')
	return tlMainMain
}

function end(){
	const tlEnd = new TimelineMax()
	const ratio = size.w/size.h
	const data = {
		portrait: {
			frame2: {y:size.h},
			wrapper: {y:`-=${size.h}`}
		},
		landscape: {
			frame2: {x:size.w},
			wrapper: {x:`-=${size.w}`}
		}
	}
	console.log(ratio);
	const direction = ratio < 1.5 ? 'portrait' : 'landscape'
	const result = data[direction]
	
	console.log(result);
	tlEnd.add('shift', '+=2')
	tlEnd.set('.frame2', {opacity:1}, 'shift')
	tlEnd.from('.frame2', .8, {...result.frame2}, 'shift')
	tlEnd.to('#wrapper', .8, {...result.wrapper}, 'shift')
	tlEnd.from('.frame2 p', .3, {opacity:0})

	tlEnd.to('.frame2 p', .3, {opacity:0}, '+=2')
	tlEnd.to('.frame3', .3, {opacity:1})

	return tlEnd
}







export {end, spark}