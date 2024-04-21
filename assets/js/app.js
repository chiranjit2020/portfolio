const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


//Form Submit
const form = document.getElementById('form');
const result = document.getElementById('msg');

form.addEventListener('submit', function (e) {
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
        .then(function () {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});


//Primary Nav
const primaryNavListItems = document.querySelectorAll('.primary-nav ul li');

primaryNavListItems.forEach(el => {
    el.addEventListener('click', function(){
        primaryNavListItems.forEach(l => l.classList.remove('active'))
        this.classList.add('active')
    })

})

const menuTrigger = document.getElementById('menu-trigger');

if(menuTrigger){
    menuTrigger.addEventListener('click', () =>{
        const primaryNav = document.querySelector('.primary-nav');
        primaryNav.classList.toggle('primary-nav--open');

        // Toggle icon based on the visibility state of the menu
        menuTrigger.querySelector('i').classList.toggle('bi-x-lg');
    });
}