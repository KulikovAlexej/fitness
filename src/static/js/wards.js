let sliderContainer = document.querySelector('.slider_wrap');
let counter_slides = document.querySelector('.pagin_wrap.wards');
let wards_slider = new WardsSlider(sliderContainer, counter_slides);

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