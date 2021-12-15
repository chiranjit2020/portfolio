let ham = document.querySelector(".hamburger");
let hamBox = document.querySelector(".hamburger .hamburger-box");
ham.addEventListener('click', () => {
	hamBox.classList.toggle("is-active");

	let mmenu = document.querySelector(".menu");
	let close = document.querySelector(".hamburger .is-active");

	console.log(close);

	close.addEventListener("click", () => {
		mmenu.classList.add('.menu-visible');
	});
	
});



