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