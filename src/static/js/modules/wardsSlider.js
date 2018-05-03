(function(){

	'use strict'

	const Slider = window.Slider;

	class WardsSlider extends Slider{

		constructor(slider_wrap, slide_counter) {
			super( slider_wrap );
			this.slide_counter = slide_counter;
			this.spanStripe = undefined;

		}

		moveSlide ( direction ) {
			if( this.activeSlide < this.amount_slides - 1 && this.notAnimated ) {

				this.notAnimated = false;
				this.activeSlide++;
				this.reqCssPos = this.reqCssPos - 100;
				this.slides.forEach(( slide ) => {
					slide.style.transform = 'translateX(' + this.reqCssPos + '%)';
				})
				this.spanStripe.forEach((span) => {
					span.style.transform = 'translateY(' + this.reqCssPos + '%)';
				})

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
			this.spanStripe.forEach((span) => {
				span.style.transform = 'translateY(0%)';
			})
		}
	
		createPageCounter () {
			document.querySelector('.pagin_wrap .amount_slides span').innerHTML = '/0' + this.amount_slides;
			let slideIndexes = [];
			this.slides.forEach((slides, index) => {
				slideIndexes.push(`0${index + 1}`)
			})

			slideIndexes.forEach((index) => {
				let newSpan = document.createElement('span');
				newSpan.innerHTML = index;
				document.querySelector('.pagin_wrap .counter_slides').appendChild(newSpan);
			})
			this.spanStripe = document.querySelectorAll('.pagin_wrap .counter_slides span');
			

		}
	}


	window.WardsSlider = WardsSlider;

})();