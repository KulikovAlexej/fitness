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

const copyBtn = document.querySelector('.copy_btn');

copyBtn.addEventListener('click', (e) => {
	const spans = document.querySelector('.card_number_wrap').children;
	let text = '';
	for(let i = 0; i < spans.length; i++) {
		text += spans[i].innerText;
	}
	copyToClipboard(text);
  copyBtn.children[0].innerText = "Скопировано";
  console.log(copyBtn.innerHTML);

})

let modal_observer = new ModalObserver(false);
let menuPopUpObj = {
  popUp: document.querySelector('.modal_window.menu'),
  closeBtn: document.querySelector('.nav-toggle'),
  openBtn: document.querySelector('.nav-toggle')
}

// let youtubePopUp = new PopUp(youtubeObject, modal_observer);
let menuPopUp = new PopUp(menuPopUpObj, modal_observer);
// youtubePopUp.init();
menuPopUp.init();
// menuPopUp.makeVisible();

///////////////////
const hamburger = new Hamburger(document.querySelector('.nav-toggle'), menuPopUp);

document.querySelector('.nav-toggle').addEventListener('click', (e) => {
  hamburger.doToggle(e)
})