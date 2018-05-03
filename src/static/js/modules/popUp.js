(function(){

	'use strict'



	class PopUp {
		constructor(popUpObject, modalObserver){
			this.popUp = popUpObject.popUp;
			this.closeBtn = popUpObject.closeBtn;
			this.openBtn = popUpObject.openBtn;
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
			this.openBtn.addEventListener('click', (event) => {
				if(this.modalObserver.activeModal == false){
					this.makeVisible();
					// console.log(modal_observer.activeModal);
				}
			})
			this.closeBtn.addEventListener('click', ( event ) => {
				if( this.modalObserver.activeModal == true ) {
					this.makeHidden();
					// console.log( modal_observer.activeModal );
				}
			})
		}
	}

	window.PopUp = PopUp;

})();