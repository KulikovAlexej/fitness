// (function(){

// 	'use strict'

// 	class PopUp {
// 		constructor(popUpObject){
// 			this.popUp = popUpObject.popUp;
// 			this.closeBtn = popUpObject.closeBtn;
// 			this.openBtn = popUpObject.openBtn;
// 			this.activated = false;
// 		}

// 		makeVisible () {
// 			this.popUp.classList.add('active');
// 			modal_observer.changeActivity();
// 		}

// 		makeHidden () {
// 			this.popUp.classList.remove('active');
// 			modal_observer.changeActivity();
// 		}

// 		init () {
// 			this.openBtn.addEventListener('click', (event) => {
// 				if(modal_observer.activeModal == false){
// 					this.makeVisible();
// 					// console.log(modal_observer.activeModal);
// 				}
// 			})
// 			this.closeBtn.addEventListener('click', ( event ) => {
// 				if( modal_observer.activeModal == true ) {
// 					this.makeHidden();
// 					// console.log( modal_observer.activeModal );
// 				}
// 			})
// 		}
// 	}

// 	window.PopUp = PopUp;

// });
(function(){
	
	class Hoho {
		sayHoho(){
			console.log('hoho')
		}
	}

	window.Hoho = Hoho;
})();
(function(){
	let a = 10;
	class HIHI {
		say(){
			console.log(1234)
		}
	}
})();