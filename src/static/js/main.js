function init(){
	// var string = document.querySelector('#anim');
	// var length = string.offsetWidth;
	// // console.log(length);
	// var bounce = new Bounce();
	// bounce.translate({
	// 	from: { x: 0, y: 0 },
	// 	to: { x: -480, y: 0 },
	// 	duration: 50000
	// });
	// bounce.applyTo(document.querySelectorAll(".animation-target"));
	

	// bounce.applyTo(string);

	
	// console.log(steps.length);
}
let steps = document.querySelectorAll('.step_wrap p');
let headers = document.querySelectorAll('.trim h6');
let articles = document.querySelectorAll('.slide .body_part p');
let currentSlide = 0;
let prevSlide = undefined;
// console.log(Number.isInteger(prevSlide));
let lastSlide = steps.length - 1;
let button = document.querySelector('#clickMe');
// let clickFunc = () => {
// 	console.log('нахуй');
// 	button.removeEventListener('click', clickFunc)
// };
// button.addEventListener('click', clickFunc);

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
	currentSlide = i;
	console.log('im working');
	steps[i].removeEventListener('click', makeActive)
	//removing do not work
}

makeActive(0);
steps.forEach(function(item, i){
	steps[i].addEventListener('click', function(e){
		removeActive();
		makeActive(i);
		
	})
});

