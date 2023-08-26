const slideBtn = document.getElementById('slide-btn');
slideBtn.addEventListener('click', () => {
	document.querySelector('aside').classList.toggle('active');
	document.querySelector('#slide-btn').classList.toggle('active');
});
