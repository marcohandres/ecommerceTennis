/*===== MENU SHOW =====*/ 
 function showMenu(toggleId, navId){
     const toggle = document.getElementById(toggleId),
           nav = document.getElementById(navId) ;

    if( toggle && nav ){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show');
        })
    }
 }

 showMenu('nav-toggle','nav-menu');

/*===== REMOVE MENU =====*/
const navLinks = document.querySelectorAll('.nav-link'),
      navMenu   = document.getElementById('nav-menu') ;

function linkAction(){
    navMenu.classList.remove('show');
}

navLinks.forEach(n => n.addEventListener('click', linkAction));


/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollActive);

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop -50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*='+ sectionId +']').classList.add('active');
        }else{
            document.querySelector('.nav-menu a[href*='+ sectionId +']').classList.remove('active');
        }

    })
}

/*===== CHANGE COLOR HEADER =====*/ 
window.onscroll = ()=>{
    const header = document.getElementById('header');
    if(this.scrollY >= 200){
        header.classList.add('scroll-header')
    }else{
        header.classList.remove('scroll-header')
    }
}


/* main */
let index = 1;
showSlide(index);

setInterval(function time(){
    showSlide(index+=1);
}, 4000);

let prev = document.getElementById('prev');
let next = document.getElementById('next');

prev.addEventListener("click", function(){
    positionSlide(-1);
} );

next.addEventListener("click", function(){
    positionSlide(1);
} );

let bars = document.querySelectorAll('.bar');

for(let i=0; i<bars.length; i++){
    bars[i].addEventListener("click", function(){
        barSlider( i+1 );
    });
}

function positionSlide(n){
    showSlide(index+=n);
}

function barSlider(n){
    showSlide(index=n);
}

function showSlide(n){
    let sliders = document.querySelectorAll('.slider-item');
    let bars = document.querySelectorAll('.bar');

    if(n > sliders.length){
        index = 1;
    }
    if( n < 1){
        index = sliders.length;
    }

    sliders.forEach(s => {
        s.style.display = 'none';
    });

    bars.forEach(b => {
        b.className = b.className.replace("active", " ");
    });

    sliders[index-1].style.display = 'block';
    bars[index-1].className += " active";

}