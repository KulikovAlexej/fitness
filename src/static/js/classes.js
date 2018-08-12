(function(){

	'use strict'

	class ModalObserver {
		constructor (startActivity) {
			this.activeModal = startActivity;
		}
		changeActivity () {
			this.activeModal = !this.activeModal;
		}
	}

	window.ModalObserver = ModalObserver;

})();
(function(){

	'use strict'

	class PageScroll {
		constructor() {
			this.body = document.querySelector('body');
			this.screens = document.querySelectorAll('.screen_wrap');
			this.pageNumbers;
			this.activeScreen = 0;
			this.reqCssPos = 0;
			this.notAnimated = true;
		}

		init() {

			this.screens[0].classList.add('active');
			this.createPageList();

			this.screens[this.activeScreen].addEventListener('transitionend', (event) => {
				this.notAnimated = true;
			})
		}

		moveScreen (direction) {
			if(direction == 'down'){
				if(this.activeScreen < this.screens.length - 1 && this.notAnimated){
					// console.log('Поехали вниз');
					this.notAnimated = false;
					this.activeScreen++;
					this.reqCssPos = this.reqCssPos - 100;
					this.screens.forEach(screen => {
						screen.style.transform = 'translateY(' + this.reqCssPos + '%)';
					})
					this.pageNumbers.forEach(pageNumber => {
						pageNumber.style.transform = 'translateY(' + this.reqCssPos + '%)';
					})
					// notAnimated = true;
					// setTimeout(function() {
					// 	notAnimated = true;
					// }, 400);
				}
				
			}
			else if(direction == 'up') {
				if(this.activeScreen > 0 && this.notAnimated){
					// console.log('Поехали вверх');
					this.notAnimated = false;
					this.activeScreen--;
					this.reqCssPos = this.reqCssPos + 100;
					this.screens.forEach(screen => {
						screen.style.transform = 'translateY(' + this.reqCssPos + '%)';
					})
					this.pageNumbers.forEach(pageNumber => {
						pageNumber.style.transform = 'translateY(' + this.reqCssPos + '%)';
					})
				}
				
			}
		}

		createPageList() {
			document.querySelector('.amount_page p').innerHTML = '0' + this.screens.length;
			let arr = [];

			this.screens.forEach(function(screen, item) {
				arr.push('0' + (item + 1))
			})

			arr.forEach(function(item) {
				let newP = document.createElement('p');
				newP.innerHTML = item;
				document.querySelector('.current_page_wrap').appendChild(newP);
			})

			this.pageNumbers = document.querySelectorAll('.current_page_wrap p');
		}

	}
	

	window.PageScroll = PageScroll;

})();
(function(){

	'use strict'



	class PopUp {
		constructor(popUpObject, modalObserver){
			this.popUp = popUpObject.popUp;
			this.closeBtn = popUpObject.closeBtn;
			this.openBtn = popUpObject.openBtn;
			this.activated = false;
			this.modalObserver = modalObserver;
		}

		makeVisible () {
			this.popUp.classList.add('active');
			this.modalObserver.changeActivity();
		}

		makeHidden () {
			this.popUp.classList.remove('active');
			this.modalObserver.changeActivity();
		}

		init () {
			this.openBtn.addEventListener('click', (event) => {
				if(this.modalObserver.activeModal == false){
					this.makeVisible();
					// console.log(modal_observer.activeModal);
				}
			})
			this.closeBtn.addEventListener('click', ( event ) => {
				if( this.modalObserver.activeModal == true ) {
					this.makeHidden();
					// console.log( modal_observer.activeModal );
				}
			})
		}
	}

	window.PopUp = PopUp;

})();
(function(){

	'use strict'

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

	window.Slider = Slider;

})();
(function(){

	'use strict'

	const Slider = window.Slider;

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
	

	window.StepSlider = StepSlider;

})();
(function(){

	'use strict'

	class Tab {
		constructor(containerTab, headerPart, bodyPart, cross_stripe){
			this.tab = containerTab;
			this.headerPart = headerPart;
			this.bodyPart = bodyPart;
			this.cross_stripe = cross_stripe;
			this.animated = false;
		}
		toggleContent() {
			if(this.animated == false){
				this.animated = true;
				this.tab.classList.toggle('active');
				if(this.tab.classList.contains('active')){
					this.bodyPart.style.maxHeight = `${this.bodyPart.scrollHeight}px`;
					this.cross_stripe.classList.add('active')
				}
				else{
					this.bodyPart.style.maxHeight = '0px';
					this.cross_stripe.classList.remove('active')
				}
			}
			
		}

		finishedAnimation() {
			this.animated = false;
		}
	}
	

	window.Tab = Tab;

})();
(function(){

	'use strict'

	const Slider = window.Slider;

	class WardsSlider extends Slider{

		constructor(slider_wrap, slide_counter) {
			super( slider_wrap );
			this.slide_counter = slide_counter;
			this.spanStripe = undefined;
			this.currentSlideWrap = this.slide_counter.children[0];
			this.amountSlideWrap = this.slide_counter.children[1];

		}

		moveSlide ( direction ) {
			if( this.activeSlide < this.amount_slides - 1 && this.notAnimated ) {

				this.notAnimated = false;
				this.activeSlide++;
				this.reqCssPos = this.reqCssPos - 100;
				this.slides.forEach(( slide ) => {
					slide.style.transform = 'translateX(' + this.reqCssPos + '%)';
				})

				for(let i = 0; i < this.spanStripe.length; i++) {
					this.spanStripe[i].style.transform = 'translateY(' + this.reqCssPos + '%)';
				}

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
			})

			for(let i = 0; i < this.spanStripe.length; i++) {
				this.spanStripe[i].style.transform = 'translateY(0%)';
			}
		}
	
		createPageCounter () {

			const amountSpan = document.createElement('span');
			amountSpan.innerHTML = '/0' + this.amount_slides;

			this.amountSlideWrap.appendChild(amountSpan);
			let slideIndexes = [];
			this.slides.forEach((slides, index) => {
				slideIndexes.push(`0${index + 1}`)
			})

			slideIndexes.forEach((index) => {
				let newSpan = document.createElement('span');
				newSpan.innerHTML = index;
				this.currentSlideWrap.appendChild(newSpan);
			})
			this.spanStripe = document.querySelectorAll('.pagin_wrap .counter_slides span');
			this.spanStripe = this.currentSlideWrap.children;	
		}
	}


	window.WardsSlider = WardsSlider;

})();