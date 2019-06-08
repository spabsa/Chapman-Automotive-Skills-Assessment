const navLinks = document.querySelectorAll('.nav-links .link');
const linksArray = Array.from(document.querySelectorAll('.links div'));
const header = document.querySelector('header');
const submit = document.querySelector('#submit');


for (var i = 0; i < navLinks.length; i++) {
	navLinks[i].addEventListener('click', changeColor);
}

for (var i = 0; i < linksArray.length; i++) {
	linksArray[i].addEventListener('click', shuffle);
}

function changeColor() {
	let hexArray = [0, 1, 2, 3, 4, 5, 6, 'A', 'B', 'C', 'D', 'E', 'F'];
	let hexColor = '#';

	for(let i = 0; i < 6; i++) {
		let random = Math.floor(Math.random()*hexArray.length);
		hexColor += hexArray[random];
	}

	header.style.backgroundImage = 'none';
	header.style.backgroundColor = hexColor;

	setTimeout(function() {
		header.style.backgroundImage = 'url(img/canada.jpeg)';
	}, 2000);
}

function shuffle() { //  Fisher-Yates shuffle algorithm
  for (let i = linksArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 
    [linksArray[i].innerHTML, linksArray[j].innerHTML] = [linksArray[j].innerHTML, linksArray[i].innerHTML]; 
  }
}

submit.addEventListener('click', (e) => {
	e.preventDefault();
	const name = document.querySelector('.name').value;
	const address = document.querySelector('.address').value;
	const city = document.querySelector('.city').value;
	const dialog = document.querySelector('.dialog-wrap');
	const close = document.querySelector('.close');

	dialog.style.display = 'block';
	document.querySelector('.dialog-name').innerHTML = name;
	document.querySelector('.dialog-address').innerHTML = address;
	document.querySelector('.dialog-city').innerHTML = city;
	close.onclick = () => {
		dialog.style.display = 'none';
		document.querySelector("form").reset();
	}
	
})



