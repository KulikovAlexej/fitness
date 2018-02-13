let container = document.querySelector('.slider_wrap');
let steps = document.querySelectorAll('.step_wrap p');
let headers = document.querySelectorAll('.trim h6');
let articles = document.querySelectorAll('.slide .body_part p');
let currentSlide = 0;
let prevSlide = undefined;
// console.log(Number.isInteger(prevSlide));
let lastSlide = steps.length - 1;


let removeActive = () => {
	steps.forEach((step,i) => {
		step.classList.remove('active')
	});
	headers.forEach((header, i) => {
		header.classList.remove('visibleY')
	});
	articles.forEach((article, i) => {
		article.classList.remove('visibleY')
	})
}
let makeActive = (i) => {
	steps[i].classList.add('active');
	//Здесь нужно получать индекс предыдущего активного слайда
	if(i>0){
		steps[0].nextSibling.nextSibling.classList.add('hidden');
	}
	
	console.log(steps[i].nextSibling.nextSibling);
	headers[i].classList.add('visibleY');
	articles[i].classList.add('visibleY');
	prevSlide = currentSlide;
	currentSlide = i;
	console.log('im working');
	steps[i].removeEventListener('click', makeActive)
	//removing do not work
}

makeActive(0);
// steps.forEach(function(item, i){
// 	steps[i].addEventListener('click', function(e){
// 		removeActive();
// 		makeActive(i);	
// 	})
// });
container.addEventListener('click', (e) => {
	console.log(event.target)
})



let body = document.querySelector('body');
body.addEventListener('wheel', (e) => {
	let section = document.querySelectorAll('section');
	let toggleSect = (sectionIndex) => {
		let target = e.target;
		let slide = document.querySelector('.slider_wrap slide');
		section[sectionIndex-1].classList.remove('active');
		section[sectionIndex-1].classList.add('hidden');
		section[sectionIndex].classList.add('active');
		console.log(e.path);
		// console.log(e.timeStamp);
	}
	toggleSect(1);
})

