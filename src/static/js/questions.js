document.querySelectorAll('.container_tab').forEach((containerTab) => {
	
	let headerPart = containerTab.firstElementChild;
	let bodyPart = containerTab.lastElementChild;
	// bad solution
	let cross_stripe = headerPart.lastElementChild.lastElementChild;

	let tab = new Tab(containerTab, headerPart, bodyPart, cross_stripe);


	headerPart.addEventListener('click', (event) => {
		tab.toggleContent();
	})

	bodyPart.addEventListener('transitionend', (event) => {
		tab.finishedAnimation();
	})


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