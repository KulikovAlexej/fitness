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