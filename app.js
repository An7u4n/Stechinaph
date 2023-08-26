const images = document.getElementsByClassName('gallery-img');
const slideBtn = document.getElementById('slide-btn');

// Crear Imagen Con Zoom
function zoomImage(image) {
	const zoom = `<div id="zoom-div">
  <img src="${image.src}" class="image-zoom"><div id="zoom-bgd"></div>
</div>`;
	document.body.insertAdjacentHTML('beforeend', zoom);
	zoomDelete();
	document.body.style.overflow = 'hidden';
}

// Eliminar Imagen Con Zoom
function zoomDelete() {
	const zoom = document.getElementById('zoom-bgd');
	zoom.addEventListener('click', () => {
		document.getElementById('zoom-div').remove();
		document.body.style.overflow = 'auto';
	});
}

for (let i = 0; i < images.length; i++) {
	images[i].addEventListener('click', () => {
		zoomImage(images[i]);
	});
}

slideBtn.addEventListener('click', () => {
	document.querySelector('aside').classList.toggle('active');
	document.querySelector('#slide-btn').classList.toggle('active');
});
