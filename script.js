const totalHeight = document.body.scrollHeight - window.innerHeight;
const root = document.documentElement;
const body = document.body;
const btnDarkmode = document.body.querySelector('.btn-darkmode');
const btnBurger = document.body.querySelector('.burger');
const navbar = document.body.querySelector('nav');
const header = document.body.querySelector('header');

const navlinksContainer = document.body.querySelector('.navlinks-container');
const openNav = document.body.querySelector('.open');
const closeNav = document.body.querySelector('.close');
const navlinks = document.body.querySelectorAll('.navlinks-container li a');;
const btnDisco = document.body.querySelector('.btn-discover');

let j = false;
let i = false;

// Dark Mode
btnDarkmode.addEventListener("click", ()=>{

    if(!i){
        body.classList.add("body-darkmode");
        root.style.setProperty('--color-primary','#f9fbfc');
        root.style.setProperty('--color-secondary','#ffffffbd');
        root.style.setProperty('--background-navbar','#121d32')
        header.style.background='var(--background-dark-mode)';
        btnDarkmode.src = "src/icon/sun.png";
        i = true;
    }else {
        root.style.setProperty('--background-navbar','#fff');
        root.style.setProperty('--color-primary','#294268');
        root.style.setProperty('--color-secondary','#255cade0')
        header.style.background='#fefefe';
        body.classList.remove("body-darkmode");
        btnDarkmode.src = "src/icon/moon.png";


       


        i = false;
    }
}); 

// Menu burger

btnBurger.addEventListener("click", ()=>{

    if(!j){
        body.style.overflowY='hidden';
        navlinksContainer.classList.toggle('open');
        j = true;
    }
    else{
        navlinksContainer.classList.remove('open');
        body.style.overflowY='visible';
        
        j = false;
    }
    
})

navlinks.forEach(link=>{
    link.addEventListener('click', ()=>{
        navlinksContainer.classList.remove('open');
        body.style.overflowY='visible';
    })
})

// Effet flou au scroll
window.addEventListener("scroll", ()=>{

    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    if(progressHeight > 0.5) {
        navbar.style.backdropFilter='blur(5px)';
        navbar.style.backgroundColor='rgba(255,255,255,.15)'
      

    }else {
        navbar.style.backgroundColor='var(--background-navbar)';
    }
   
    
})
