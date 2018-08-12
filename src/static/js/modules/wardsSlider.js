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