/* ---------------------------------------------------------------------------------------- */
// MUSIC
/* ---------------------------------------------------------------------------------------- */

const audio = document.getElementById('main-song');

document.addEventListener('DOMContentLoaded', function () {
	audio.currentTime = 0;
	audio.play();
});

document.getElementById('volume-btn').addEventListener('click', function () {
	var volumeHighIcon = document.getElementById('volume-high');
	var volumeSlowIcon = document.getElementById('volume-slow');

	if (volumeHighIcon.style.display !== 'none') {
		volumeHighIcon.style.display = 'none';
		volumeSlowIcon.style.display = 'inline-block';
		audio.play();
	} else {
		volumeHighIcon.style.display = 'inline-block';
		volumeSlowIcon.style.display = 'none';
		audio.pause();
	}
});

audio.play();

/* ---------------------------------------------------------------------------------------- */
// ANIMATION INTRO
/* ---------------------------------------------------------------------------------------- */

// function scrollDate() {
// 	let animation = document.getElementById('animation-intro');

// 	let scrollTop = animation.getBoundingClientRect().top;

// 	let screenSize = window.innerHeight / 1.25;

// 	if (scrollTop < screenSize) {
// 		animation.style.animation = 'animation-left 1s ease-out';
// 		animation.style.opacity = 1;
// 	}
// }

// window.addEventListener('scroll', scrollDate);

/* ---------------------------------------------------------------------------------------- */
// COUNTDOWN
/* ---------------------------------------------------------------------------------------- */

// Establecer la fecha de finalización
const countDownDate = new Date('March 23, 2024 19:00:00').getTime();

// Actualizar la cuenta regresiva cada segundo
const x = setInterval(function () {
	// Obtener la fecha y hora actual
	const now = new Date().getTime();

	// Calcular la diferencia entre la fecha de finalización y la fecha actual
	const distance = countDownDate - now;

	// Calcula los días, horas, minutos y segundos restantes
	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	// const months = Math.floor(days / 30);
	const hours = Math.floor(
		(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Mostrar la cuenta regresiva en un elemento HTML
	document.getElementById('days').innerHTML = `${days}`;
	document.getElementById('hours').innerHTML = `${hours}`;
	document.getElementById('minutes').innerHTML = `${minutes}`;
	document.getElementById('seconds').innerHTML = `${seconds}`;

	// Si la cuenta regresiva ha terminado, mostrar un mensaje
	if (distance < 0) {
		clearInterval(x);
		document.getElementById('countdown').innerHTML =
			'¡La cuenta regresiva ha terminado!';
	}
}, 1000);

/* ---------------------------------------------------------------------------------------- */
// GIFTS
/* ---------------------------------------------------------------------------------------- */

// Modal

const modal = document.getElementById('modal-assistance');
const openModalBtn = document.getElementById('open-assistance-btn');
const closeBtn = document.getElementsByClassName('close-btn')[0];

openModalBtn.onclick = function () {
	modal.style.display = 'block';
};

closeBtn.onclick = function () {
	modal.style.display = 'none';
};

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};

// Copiar portapapeles

const copyBtn = document.getElementById('copy-btn');

copyBtn.onclick = function () {
	// Crear un elemento de texto temporal
	var input = document.createElement('input');
	// Asignar el valor que queremos copiar
	input.value = '0140042703512055285503';
	// Añadir el elemento al DOM
	document.body.appendChild(input);
	// Seleccionar el contenido del elemento de texto
	input.select();
	// Copiar el texto seleccionado
	document.execCommand('copy');
	// Eliminar el elemento de texto temporal
	document.body.removeChild(input);
	// Alerta de copiado
};
