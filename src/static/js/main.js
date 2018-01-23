function init(){
	var string = document.querySelector('#anim');
	var length = string.offsetWidth;
	// console.log(length);
	var bounce = new Bounce();
	bounce.translate({
		from: { x: 0, y: 0 },
		to: { x: -480, y: 0 },
		duration: 50000
	});
	// bounce.applyTo(document.querySelectorAll(".animation-target"));
	

	bounce.applyTo(string);
}