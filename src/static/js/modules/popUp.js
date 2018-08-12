(function(){

	'use strict'



	class PopUp {
		constructor(popUpObject, modalObserver){
			this.popUp = popUpObject.popUp;
			this.activated = false;
			this.modalObserver = modalObserver;
		}

		makeVisible () {
			this.popUp.classList.add('active');
			this.modalObserver.changeActivity();
		}

		makeHidden () {
			this.popUp.classList.remove('active');
			this.modalObserver.changeActivity();
		}

		init () {

		}
	}

	window.PopUp = PopUp;

})();