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
			console.log(1234567890);
			this.screens[0].classList.add('active');
			this.createPageList();
			// this.body.addEventListener('wheel', this.handleWheel);

			

			this.screens[this.activeScreen].addEventListener('transitionend', (event) => {
				this.notAnimated = true;
			})
		}

		// handleWheel (event) {
		// 	console.log(1230)
		// 	let delta = event.deltaY || event.detail || event.wheelDelta;
		// 	if(delta > 0) {
		// 		this.moveScreen('down')
		// 	}
		// 	else if(delta < 0) {
		// 		this.moveScreen('up')
		// 	}

		// }

		// moveScreen(){
		// 	console.log('go')
		// }


		moveScreen (direction) {
			if(direction == 'down'){
				if(this.activeScreen < this.screens.length - 1 && this.notAnimated){
					// console.log('Поехали вниз');
					this.notAnimated = false;
					this.activeScreen++;
					this.reqCssPos = this.reqCssPos - 100;
					this.screens.forEach(function(screen) {
						screen.style.transform = 'translateY(' + this.reqCssPos + '%)';
					})
					this.pageNumbers.forEach(function(pageNumber) {
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
					this.screens.forEach(function(screen) {
						screen.style.transform = 'translateY(' + this.reqCssPos + '%)';
					})
					this.pageNumbers.forEach(function(pageNumber) {
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