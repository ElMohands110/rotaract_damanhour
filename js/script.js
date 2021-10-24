/* =================== Main Variables =================== */
let btnUp = document.querySelector('.btn_up');
let btnOpenNav = document.querySelector('.open_nav');
let btnCloseNav = document.querySelector('.close_nav');
let navMenu = document.querySelector('.nav_menu');
let navbar = document.querySelector('nav');
let btnDonate1 = document.getElementById('donate_btn1');
let btnDonate2 = document.getElementById('donate_btn2');
let pubUp = document.querySelector('.pub_up');
let closePubUp = document.querySelector('.close_pub')
let body = document.querySelector('.body');

/* =================== Menu Show (Navbar) ================== */
btnOpenNav.addEventListener('click', function() {
    navMenu.style.right = '0';
});

/* ==================== Close Button  ======================== */
btnCloseNav.addEventListener('click', function() {
    navMenu.style.right = '-100%';
});

/* =================== Change of Navbar ==================== */
window.addEventListener('scroll', function() {
    var scrollNav = window.scrollY;
    if(scrollNav >= '60') {
        btnUp.classList.remove('hidden');
        navbar.classList.add('nav_fixed');
    }
    else {
        btnUp.classList.add('hidden');
        navbar.classList.remove('nav_fixed');
    }
});

/* =================== Donate Pub Up ==================== */
const openPub = function() {
    pubUp.classList.remove('hidden');
    body.classList.add('blur');
}
const closePub = function() {
    pubUp.classList.add('hidden');
    body.classList.remove('blur');
}

btnDonate1.addEventListener('click', openPub);
btnDonate2.addEventListener('click', openPub);

closePubUp.addEventListener('click', closePub);