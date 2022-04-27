'use strict'
window.addEventListener('load', function () {
    let preloader = document.createElement('div');
    preloader.setAttribute('id', 'preloader');
    preloader.innerHTML = `<img src="images/bird.gif" alt="loader" />`;
    
    if( document.body != null ){
        document.body.prepend(preloader);
    }
    
    setTimeout(removeLoader, 2000);
    
    function removeLoader(){
        preloader.remove();
    }
});