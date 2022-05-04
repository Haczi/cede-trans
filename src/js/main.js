const burgerBtn = document.querySelector('.burger-btn')
 const navItems = document.querySelectorAll('.nav-mobile__link')
 const allsections = document.querySelectorAll('section')
 const navBtnBars = document.querySelectorAll('.burger-btn__box span')

const showNav =()=>{
    const navMobile = document.querySelector('.nav-mobile')
    navMobile.classList.toggle('nav-mobile--active')
    const navBar1 = document.querySelector('.burger-btn__line1')
    const navBar2 = document.querySelector('.burger-btn__line2')
    const navBar3 = document.querySelector('.burger-btn__line3')
    
    navBar1.classList.toggle('made-x')
    navBar2.classList.toggle('made-middle')
    navBar3.classList.toggle('made-y')
    showNavItemsAnimation()
}

const showNavItemsAnimation = () =>{
    let delayTime = 0;

    navItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}

const handleObserver = () =>{
    const currentSection = window.scrollY;

    allsections.forEach(section => {
        if (section.classList.contains('wrapper') && section.offsetTop <= currentSection + 10) {
            navBtnBars.forEach(navBtnBar=>navBtnBar.classList.add('black-bars-color'))
        } else if (!section.classList.contains('wrapper') && section.offsetTop <= currentSection + 10 || section.offsetTop <= 500) {
            navBtnBars.forEach(navBtnBar=>navBtnBar.classList.remove('black-bars-color'))
        }
    })
}


burgerBtn.addEventListener('click', showNav)
navItems.forEach(item => item.addEventListener('click', showNav) )
window.addEventListener('scroll', handleObserver)