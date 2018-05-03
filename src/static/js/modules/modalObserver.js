(function(){

	'use strict'

	class ModalObserver {
		constructor (startActivity) {
			this.activeModal = startActivity;
		}
		changeActivity () {
			this.activeModal = !this.activeModal;
		}
	}

	window.ModalObserver = ModalObserver;

})();