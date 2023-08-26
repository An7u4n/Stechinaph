const slideBtn = document.getElementById('slide-btn');
const slideCloseBtn = document.getElementById('close-btn');
slideBtn.addEventListener('click', () => {
	document.querySelector('aside').classList.toggle('active');
	document.querySelector('#slide-btn').classList.toggle('active');
});

slideCloseBtn.addEventListener('click', () => {
	document.querySelector('aside').classList.toggle('active');
	document.querySelector('#slide-btn').classList.toggle('active');
});
