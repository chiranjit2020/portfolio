const button = document.querySelector("#back2top");
// Call the BACK2TOP Function
// BACK2TOP(element, offsetToValue)
BACK2TOP(button, 200);


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
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

const form = document.getElementById('form');
const result = document.getElementById('msg');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    e.preventDefault();
    var object = {};
    formData.forEach((value, key) => {
        object[key] = value
    });
    var json = JSON.stringify(object);
    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
            	result.style.display = "inline-block";
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.style.display = "inline-block";
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});