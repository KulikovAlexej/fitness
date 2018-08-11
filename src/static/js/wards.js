let sliderContainer = document.querySelector('.slider_wrap');
let counter_slides = document.querySelector('.pagin_wrap.wards');
let wards_slider = new WardsSlider(sliderContainer, counter_slides);

console.log(1234)
wards_slider.init();
wards_slider.createPageCounter();

document.querySelector('#wards_onright').addEventListener('click', ( event ) => {

	if ( wards_slider.activeSlide == wards_slider.amount_slides - 1 && wards_slider.notAnimated ) {
		wards_slider.restart()
	}
	else{
		wards_slider.moveSlide('forward');
	}

})