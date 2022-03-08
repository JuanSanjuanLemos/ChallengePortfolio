const navbar = document.querySelector(".main-nav");

function menuToggle(){
    navbar.classList.toggle('active');
}

function checkWidth(){
    if(window.screen.width>768){
        navbar.classList.remove('active');
        console.log(window.screen.width)
    }
}
