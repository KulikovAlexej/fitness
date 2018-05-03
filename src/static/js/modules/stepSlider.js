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