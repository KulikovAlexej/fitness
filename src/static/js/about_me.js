const dataSliderOne = {
	container: document.querySelectorAll('.slider_wrap')[0],
	counter: document.querySelectorAll('.pagin_wrap.wards')[0],
	next: document.querySelectorAll('.wards_onright')[0]
}

const dataSliderTwo = {
	container: document.querySelectorAll('.slider_wrap')[1],
	counter: document.querySelectorAll('.pagin_wrap.wards')[1],
	next: document.querySelectorAll('.wards_onright')[1]
}



let sliderOne = new WardsSlider(dataSliderOne.container, dataSliderOne.counter);
let sliderTwo = new WardsSlider(dataSliderTwo.container, dataSliderTwo.counter);

sliderOne.init();
sliderOne.createPageCounter();

sliderTwo.init();
sliderTwo.createPageCounter();

dataSliderOne.next.addEventListener('click', ( event ) => {

	if ( sliderOne.activeSlide == sliderOne.amount_slides - 1 && sliderOne.notAnimated ) {
		sliderOne.restart()
	}
	else{
		sliderOne.moveSlide('forward');
	}

})

dataSliderTwo.next.addEventListener('click', ( event ) => {

	if ( sliderTwo.activeSlide == sliderTwo.amount_slides - 1 && sliderTwo.notAnimated ) {
		sliderTwo.restart()
	}
	else{
		sliderTwo.moveSlide('forward');
	}

})