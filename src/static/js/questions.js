console.log(1234);
document.querySelectorAll('.toggle_btn').forEach((btn, i) => {
	btn.addEventListener('click', (event) => {
		console.log(123)
		let currentNode = event.target;
		while (!currentNode.classList.contains('question_wrap')) {
			currentNode = currentNode.parentNode;
		}
		let tab = new Tab(currentNode.nextElementSibling);
		tab.toggleContent();
	})
})
