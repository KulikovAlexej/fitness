// class QuestionBoard {
// 	constructor(){
// 		this.counter = 0;
// 	}
	
// }

// class Tab {
// 	constructor(contentTab){
// 		this.tab = contentTab;
// 	}
// 	toggleContent() {
// 		console.log(this.tab);
// 		this.tab.classList.toggle('active');
// 		if(this.tab.classList.contains('active')){
// 			this.tab.style.maxHeight = `${this.tab.scrollHeight}px`;
// 		}
// 		else{
// 			this.tab.style.maxHeight = '0px';
// 		}
		
// 	}
// }

document.querySelectorAll('.toggle_btn').forEach((btn, i) => {
	btn.addEventListener('click', (event) => {
		
		let currentNode = event.target;
		while (!currentNode.classList.contains('question_wrap')) {
			currentNode = currentNode.parentNode;
		}
		let tab = new Tab(currentNode.nextElementSibling);
		tab.toggleContent();
	})
})

// document.querySelector('.content').addEventListener( 'wheel', scrollingBlock );
// /// скролл вниз должен работать только при условии того, что 
// function scrollingBlock ( event ) {

// 	let container = document.querySelector('.content .tabs_wrap');

// 	console.log( container.getBoundingClientRect().bottom )
// 	console.log( window.innerHeight )
// 	console.log( document.documentElement.clientHeight )
// }