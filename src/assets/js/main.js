const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// swiper

const swiperFavorites = new Swiper('.favorites__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
});



const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset:true
})

sr.reveal(`.home__data, .favorites__container, .footer__container`)
sr. reveal(`.home__circle, .home__img`, {delay: 600, scale: .5})
sr. reveal(`.home__chips-1, .home__chips-2, .home__chips-3`, {delay: 1000, interval: 100})
sr.reveal(`.home__leaf`,{delay: 1200})
sr. reveal(`.home__tomato-1,.home__tomato-2`, {delay: 1400, interval:100})
sr. reveal(`.care__img, .contact__img`, {origin:'left'})
sr. reveal(`.care__list, .contact__data`, {origin:'right'})
sr. reveal(`.banner__item`, {interval:100})
