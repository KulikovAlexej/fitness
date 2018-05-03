(function(){

	'use strict'

	class Tab {
		constructor(contentTab){
			this.tab = contentTab;
		}
		toggleContent() {
			this.tab.classList.toggle('active');
			if(this.tab.classList.contains('active')){
				this.tab.style.maxHeight = `${this.tab.scrollHeight}px`;
			}
			else{
				this.tab.style.maxHeight = '0px';
			}
		
		}
	}
	

	window.Tab = Tab;

})();