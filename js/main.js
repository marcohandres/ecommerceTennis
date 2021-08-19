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