const navbar = document.querySelector(".main-nav");

function menuToggle(){
    navbar.classList.toggle('active');
}

function checkWidth(){
    if(window.screen.width>768){
        menuRemove();
        console.log(window.screen.width)
    }
}

function menuRemove(){
    navbar.classList.remove('active');
}