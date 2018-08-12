console.log(1234)

const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

document.querySelector('.copy_btn').addEventListener('click', (e) => {
	const spans = document.querySelector('.card_number_wrap').children;
	let text = '';
	for(let i = 0; i < spans.length; i++) {
		text += spans[i].innerText;
	}
	copyToClipboard(text)

})