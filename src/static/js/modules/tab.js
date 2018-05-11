(function(){

	'use strict'
	// Сделать колбэки на анимацию
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
		// test(){
		// 	this.animated = !this.animated;
		// 	console.log(this.animated)
		// }
		finishedAnimation() {
			this.animated = false;
		}
	}
	

	window.Tab = Tab;

})();