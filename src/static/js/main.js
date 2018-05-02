(function() {

	var pageScroll = (function(){
		let body = document.querySelector('body');
		let screens = document.querySelectorAll('.screen_wrap');
		let pageNumbers;
		let activeScreen = 0;
		let reqCssPos = 0;
		let notAnimated = true;
		let that = this;
		return {
			handleWheel: function(event) {
				// console.log('wheel are working');
				let delta = event.deltaY || event.detail || event.wheelDelta;
				if(delta > 0) {
					pageScroll.moveScreen('down')
				}
				else if(delta < 0) {
					pageScroll.moveScreen('up')
				}
			},
			init: function() {
				screens[0].classList.add('active');
				pageScroll.createPageList();
				body.addEventListener('wheel', this.handleWheel)

			// 'transitionend'
			let startY = 0;
			let currentY = 0;
			body.addEventListener('touchstart', (event) => {
				// console.log('start '+ event.changedTouches[0].pageX);
				startY = event.changedTouches[0].pageY;
			})
			body.addEventListener('touchmove', (event) => {
				// console.log('current '+ event.changedTouches[0].pageX);
				currentY = event.changedTouches[0].pageY;
				if(currentY - startY > 50) {
					pageScroll.moveScreen('up')
				}
				else if(currentY - startY < -50) {
					pageScroll.moveScreen('down')
				}
			})
			// pageScroll.clearHandler();


			screens[activeScreen].addEventListener('transitionend', (event) => {
				// console.log('finished');	
				notAnimated = true;
			})
			// screens.forEach((screen) => {
			// 	screen.addEventListener('transitionend', (event) => {
			// 		console.log('finish')
			// 	})
			// })
		},
		// clearHandler: function () {
		// 	body.removeEventListener('wheel', this.handleWheel);
		// },
		
		moveScreen: function(direction) {
			if(direction == 'down'){
				if(activeScreen < screens.length - 1 && notAnimated){
					// console.log('Поехали вниз');
					notAnimated = false;
					activeScreen++;
					reqCssPos = reqCssPos - 100;
					screens.forEach(function(screen) {
						screen.style.transform = 'translateY(' + reqCssPos + '%)';
					})
					pageNumbers.forEach(function(pageNumber) {
						pageNumber.style.transform = 'translateY(' + reqCssPos + '%)';
					})
					// notAnimated = true;
					// setTimeout(function() {
					// 	notAnimated = true;
					// }, 400);
				}
				
			}
			else if(direction == 'up') {
				if(activeScreen > 0 && notAnimated){
					// console.log('Поехали вверх');
					notAnimated = false;
					activeScreen--;
					reqCssPos = reqCssPos + 100;
					screens.forEach(function(screen) {
						screen.style.transform = 'translateY(' + reqCssPos + '%)';
					})
					pageNumbers.forEach(function(pageNumber) {
						pageNumber.style.transform = 'translateY(' + reqCssPos + '%)';
					})
				}
				
			}
		},
		createPageList: function() {
			document.querySelector('.amount_page p').innerHTML = '0' + screens.length;
			let arr = [];
			screens.forEach(function(screen, item) {
				arr.push('0' + (item + 1))
			})
			// console.log(arr);
			arr.forEach(function(item) {
				let newP = document.createElement('p');
				newP.innerHTML = item;
				document.querySelector('.current_page_wrap').appendChild(newP);
			})
			pageNumbers = document.querySelectorAll('.current_page_wrap p');
		},
		changePage: function(direction) {
			if(direction == 'down'){
				if(activeScreen < screens.length - 1){

				}
			}

			else if(direction == 'up'){

			}
		}
	}
})();
pageScroll.init();





class Slider {
	constructor(slider_wrap){
		this.slider_wrap = slider_wrap;
		this.slides = undefined;
		this.amount_slides = undefined;
		this.activeSlide = 0;
		this.reqCssPos = 0;
		this.notAnimated = true;
	}
	init() {
		if(this.slider_wrap.children[0].classList.contains('slide')){
			// Сделать проверку, реально ли все дети - слайды
			this.slides = [];
			for (let i = 0; i < this.slider_wrap.children.length; i++) {
				if(this.slider_wrap.children[i].classList.contains('slide')){
					this.slides.push(this.slider_wrap.children[i])
				}
			}
			// console.log(this.slides);
			this.amount_slides = this.slides.length;
		}
	}
}

class WardsSlider extends Slider{
	constructor(slider_wrap, slide_counter) {
		super( slider_wrap );
		this.slide_counter = slide_counter;
		this.spanStripe = undefined;

	}
	moveSlide ( direction ) {
		if( this.activeSlide < this.amount_slides - 1 && this.notAnimated ) {
			// console.log(2)
			this.notAnimated = false;
			this.activeSlide++;
			this.reqCssPos = this.reqCssPos - 100;
			this.slides.forEach(( slide ) => {
				slide.style.transform = 'translateX(' + this.reqCssPos + '%)';
			})
			this.spanStripe.forEach((span) => {
				span.style.transform = 'translateY(' + this.reqCssPos + '%)';
			})
			// console.log(`now slide ${this.activeSlide}`)
			this.notAnimated = true;
		}
	}
	restart () {
		
		this.slides.forEach(( slide ) => {
			this.notAnimated = false;
			slide.style.transform = 'translateX(0%)';
			this.activeSlide = 0;
			this.reqCssPos = 0;
			this.notAnimated = true;
			// console.log('restart');
		})
		this.spanStripe.forEach((span) => {
			span.style.transform = 'translateY(0%)';
		})
	}
	info () {
		// console.log('slides amount - ' + this.amount_slides)
	}
	createPageCounter () {
		document.querySelector('.pagin_wrap .amount_slides span').innerHTML = '/0' + this.amount_slides;
		let slideIndexes = [];
		this.slides.forEach((slides, index) => {
			slideIndexes.push(`0${index + 1}`)
		})
		// console.log(slideIndexes);
		slideIndexes.forEach((index) => {
			let newSpan = document.createElement('span');
			newSpan.innerHTML = index;
			document.querySelector('.pagin_wrap .counter_slides').appendChild(newSpan);
		})
		this.spanStripe = document.querySelectorAll('.pagin_wrap .counter_slides span');
		// console.log(this.spanStripe);

	}
}




class StepSlider extends Slider{
	constructor (slider_wrap, nav_bar) {
		super(slider_wrap);
		this.nav_bar = nav_bar;
	}
	positionSlides (slide, index) {
		slide.style.transform = `translate(${ -100 * index }%, 0%)`
	}

	takeHeadline ( index ) {
		return this.slides[index].children[0].children[0]
	}
	takeParagraph ( index ) {
		return this.slides[index].children[1].children[0]
	}
	makeVisible ( elem ) {
		elem.classList.remove('hidden_down');
		elem.classList.add('visibleY');
	}
	makeInvisible ( elem ) {
		elem.classList.remove('visibleY');
		elem.classList.add('hidden_up');
		elem.classList.remove('hidden_up');
		elem.classList.add('hidden_down');
	}
}



class Tab {
	constructor(contentTab){
		this.tab = contentTab;
	}
	toggleContent() {
		// console.log(this.tab);
		this.tab.classList.toggle('active');
		if(this.tab.classList.contains('active')){
			this.tab.style.maxHeight = `${this.tab.scrollHeight}px`;
		}
		else{
			this.tab.style.maxHeight = '0px';
		}
		
	}
}






class ModalObserver {
	constructor () {
		this.activeModal = false;
	}
	changeActivity () {
		this.activeModal = !this.activeModal;
	}
}


class PopUp {
	constructor(popUpObject){
		this.popUp = popUpObject.popUp;
		this.closeBtn = popUpObject.closeBtn;
		this.openBtn = popUpObject.openBtn;
		this.activated = false;
	}

	makeVisible () {
		this.popUp.classList.add('active');
		modal_observer.changeActivity();
	}
	makeHidden () {
		this.popUp.classList.remove('active');
		modal_observer.changeActivity();
	}
	say () {
		// console.log(this.popUp)
	}
	init () {
		this.openBtn.addEventListener('click', (event) => {
			if(modal_observer.activeModal == false){
				this.makeVisible();
				// console.log(modal_observer.activeModal);
			}
		})
		this.closeBtn.addEventListener('click', ( event ) => {
			if( modal_observer.activeModal == true ) {
				this.makeHidden();
				// console.log( modal_observer.activeModal );
			}
		})
	}
}







document.querySelectorAll( '.tab_wrap .step_wrap p' ).forEach(( tab, index ) => {
	tab.addEventListener('click', ( event ) => {

		if ( step_slider.activeSlide != index ) {
			let prevHeadline = step_slider.takeHeadline( step_slider.activeSlide );
			let prevParagraph = step_slider.takeParagraph( step_slider.activeSlide );

			step_slider.activeSlide = index;

			let headline = step_slider.takeHeadline( index );
			let paragraph = step_slider.takeParagraph( index );
			step_slider.makeInvisible( prevHeadline );
			step_slider.makeInvisible( prevParagraph );
			step_slider.makeVisible( headline );
			step_slider.makeVisible( paragraph );
		}
	})
})


let sliders = document.querySelectorAll('.slider_wrap');



let step_slider = new StepSlider(sliders[0]);
step_slider.init();
step_slider.slides.forEach((slide, index) => {
	step_slider.positionSlides(slide, index);
})

let counter_slides = document.querySelector('.pagin_wrap.wards')
let wards_slider = new WardsSlider(sliders[1], counter_slides);
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



document.querySelectorAll('.question_wrap').forEach((btn, i) => {
	btn.addEventListener('click', (event) => {
		
		let currentNode = event.target;
		while (!currentNode.classList.contains('question_wrap')) {
			currentNode = currentNode.parentNode;
		}
		let tab = new Tab(currentNode.nextElementSibling);
		tab.toggleContent();
	})
})



let modal_observer = new ModalObserver();
let youtubeObject = {
	popUp: document.querySelector('.modal_window.youtube'),
	closeBtn: document.querySelector('.modal_window.youtube .close_wrap'),
	openBtn: document.querySelector('.youtube_link_wrap')
}
let menuPopUpObj = {
	popUp: document.querySelector('.modal_window.menu'),
	closeBtn: document.querySelector('.modal_window.menu .close_wrap'),
	openBtn: document.querySelector('.hamburger_wrap')
}
let youtubePopUp = new PopUp(youtubeObject);
let menuPopUp = new PopUp(menuPopUpObj);
youtubePopUp.init();
menuPopUp.init();

})();

// function outer () {
// 	var otherName = 'Sergo';
// 	function sayHello ( name ) {
// 		const magicNumber = 42;
// 		console.log(`Hello, ${otherName}!`)
// 	}
// 	sayHello('Alex')
// }

// outer();

// function sum (operand1) {
// 	let privateOperand = 10;
// 	return function (operand2) {
// 		let abz = 123;
// 		console.log(operand1 + operand2)
// 	}
// }
// let plus3 = sum(3);
// plus3(9);


let request = new XMLHttpRequest();
function reqFunc () {
	if (request.readyState == 4){
		let status = request.status;
		if (status == 200) {
			console.log(request.responseText)
		}
	}
}

request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=L,uk&appid=cb30165fbee1109708d696ef9dfffd36');
request.onreadystatechange = reqFunc;
request.send();


