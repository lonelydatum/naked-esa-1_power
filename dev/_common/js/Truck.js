function truck() {
	TweenMax.to('#sparkMain', .075, {opacity:.6, yoyo:true, repeat:150})	
	const tl = new TimelineMax()
	
	tl.set('.frame1', {opacity:1})
	
	return tl
}

export default truck