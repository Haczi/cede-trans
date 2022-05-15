const burgerBtn = document.querySelector('.burger-btn')
 const navItems = document.querySelectorAll('.nav-mobile__link')
 const allsections = document.querySelectorAll('section')
 const navBtnBars = document.querySelectorAll('.burger-btn__box span')

 const counterItems = document.querySelectorAll('.achiv__counter')
 const achive = document.querySelector('.container2')

////function for section achive////
const options = {
    rootmargin: '-100%',
    // threshold: 0.7
   
}

const startCounter = entry => {



	if (entry[0].isIntersecting) {
        animationIcons()
		counterItems.forEach(counter => {
			
			const updateCounter = () => {
				const finalNumber = counter.getAttribute('data-number')
				const value = parseInt(counter.textContent)

				const speed = finalNumber / 10
				console.log(speed)
				if(value < finalNumber) {
					counter.textContent = `${Math.floor(value + speed)}`
					setTimeout(updateCounter, 50)
				} else {
					counter.textContent = finalNumber
				}
			}

			updateCounter()

		})
	}
}

const animationIcons =() =>{
    const i = document.querySelectorAll('.achiv i')
    i.forEach(icon => {icon.classList.add('show-icon-achive')})
}



///function for nav/////
 const showNav =(e)=>{
    
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
////function for nav end/////

document.activeElement.blur()
const observer = new IntersectionObserver(startCounter, options)
// observer.observe(counterItem)
counterItems.forEach(item => observer.observe(item))
burgerBtn.addEventListener('click', showNav)
navItems.forEach(item => item.addEventListener('click', showNav) )
window.addEventListener('scroll', handleObserver)
