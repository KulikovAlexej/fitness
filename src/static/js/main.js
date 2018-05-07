(function(){
	'use strict'

	let pageScroll = new PageScroll();
	pageScroll.init();

	let body = document.querySelector('body');
	let startY = 0;
	let currentY = 0;
	let handleWheel = () => {
		let delta = event.deltaY || event.detail || event.wheelDelta;
		if(delta > 0) {
			return 'down'
		}
		else if(delta < 0) {
			return 'up'
		}
	}

	body.addEventListener('wheel', (event) => {
		// console.log(handleWheel());
		pageScroll.moveScreen(handleWheel());
	});

	body.addEventListener('touchstart', (event) => {
		// console.log('start '+ event.changedTouches[0].pageX);
		startY = event.changedTouches[0].pageY;
	})

	body.addEventListener('touchmove', (event) => {
		
		currentY = event.changedTouches[0].pageY;
		if(currentY - startY > 50) {
			pageScroll.moveScreen('up')
		}
		else if(currentY - startY < -50) {
			pageScroll.moveScreen('down')
		}
	});

	//////////////////////////////////////////////////////////////////////

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

	///////////////////////////////////////////////////


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

	/////////////////////////////////////////////

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

	/////////////////////////////////////////// init popUp

	let modal_observer = new ModalObserver(false);
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

	let youtubePopUp = new PopUp(youtubeObject, modal_observer);
	let menuPopUp = new PopUp(menuPopUpObj, modal_observer);
	youtubePopUp.init();
	menuPopUp.init();

})();