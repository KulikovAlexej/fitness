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

let modal_observer = new ModalObserver(false);
let menuPopUpObj = {
  popUp: document.querySelector('.modal_window.menu'),
  closeBtn: document.querySelector('.nav-toggle'),
  openBtn: document.querySelector('.nav-toggle')
}

// let youtubePopUp = new PopUp(youtubeObject, modal_observer);
let menuPopUp = new PopUp(menuPopUpObj, modal_observer);
// youtubePopUp.init();
menuPopUp.init();
// menuPopUp.makeVisible();

///////////////////
const hamburger = new Hamburger(document.querySelector('.nav-toggle'), menuPopUp);

document.querySelector('.nav-toggle').addEventListener('click', (e) => {
  hamburger.doToggle(e)
})