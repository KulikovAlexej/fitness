(function(){

	'use strict'



	class Hamburger {
		constructor(navToggle, popUp){
			this.navToggle = navToggle;
			this.popUp = popUp;
		}

		doToggle(e) {
	    	e.preventDefault();
	    	this.navToggle.classList.toggle('expanded');
	    	// console.log(this.navToggle)
	    	if(this.navToggle.classList.contains('expanded')){
	    		console.log('открыт - закрываю')
	    		this.popUp.makeVisible();
	    	} else {
	    		console.log('закрыт - открываю')
	    		
	    		this.popUp.makeHidden();
	    	}
	      // this.nav.classList.toggle('expanded');
	  	}

		
	}

	window.Hamburger = Hamburger;

})();