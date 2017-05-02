
	console.log('startTweenmax!');

  var elem = document.getElementById('test_block');
	if(elem){
	var tl = new TimelineMax({ paused: true });
	tl
		.from(elem, 0.2, {autoAlpha:.5, scale:1})
		.to(elem, 0.2, {autoAlpha:1, scale:1.5}, "+=1")
  	.to(elem, 0.2, {y: '250px'}, "+=0.5")
  	.to(elem, 0.2, {x: '250px'}, "+=2")
		.to(elem, 0.2, {backgroundColor:'red'}, "+=1.2")
		.to(elem, 0.2, {y: 0}, "+=0.5")
	}




export const playTweenmax = () => {
		tl.play()
};

export const pauseTweenmax = () => {
		tl.pause()
};

export const reverseTweenmax = () => {
		tl.reverse()
};
