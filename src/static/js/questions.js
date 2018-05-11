document.querySelectorAll('.container_tab').forEach((containerTab) => {
	
	let headerPart = containerTab.firstElementChild;
	let bodyPart = containerTab.lastElementChild;
	// bad solution
	let cross_stripe = headerPart.lastElementChild.lastElementChild;

	let tab = new Tab(containerTab, headerPart, bodyPart, cross_stripe);


	headerPart.addEventListener('click', (event) => {
		tab.toggleContent();
	})

	bodyPart.addEventListener('transitionend', (event) => {
		tab.finishedAnimation();
	})


})