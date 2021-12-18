//Upor(Back to top button) Script
const button = document.querySelector("#upor");
// UPOR(Element, Speed, Offset)
UPOR(button,500,100);


//Mobile Menu

function closeNav(){
	let closeBtn = document.querySelector(".closebtn");

	closeBtn.addEventListener('click', () => {
		let mmenu = document.querySelector('.menu');
		mmenu.classList.remove("menu-visible");
	});
}

closeNav();

function openNav(){
	let hamburger = document.querySelector(".hamburger");
	hamburger.addEventListener("click", () => {
		let mmenu = document.querySelector('.menu');
		mmenu.classList.add("menu-visible");		
	});
}

openNav();