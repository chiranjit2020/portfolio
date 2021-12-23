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

//Footer Year
document.getElementById("year").innerHTML = new Date().getFullYear();

//Form Submission

jQuery('#frmSubmit').on('submit',function(e){
	e.preventDefault();
	jQuery('#msg').html('Please wait...').show();
	jQuery('#btnSubmit').attr('disabled',true);
	jQuery.ajax({
		url:'https://script.google.com/macros/s/AKfycbzdNnii7jA9vGnU4VfnSPVmsSWP7oKuVGIQeWFwe2zoot3DhzeitA8-OTjmTYG3wZku3g/exec',
		type:'post',
		data:jQuery('#frmSubmit').serialize(),
		success:function(result){
			jQuery('#frmSubmit')[0].reset();
			jQuery('#msg').html('Thank You For Con');
			jQuery('#btnSubmit').attr('disabled',false);
			//window.location.href='';
		}
	});
});
