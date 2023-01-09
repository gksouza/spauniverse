import { Router } from './router.js'
window.addEventListener('scroll', onScroll)

const router = new Router()
  router.add("/","/pages/home.html")
  router.add("/universe","/pages/universe.html")
  router.add("/exploration","/pages/exploration.html")
  router.add(404,"/pages/404.html")

  router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

onScroll()

function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(universe)
    activateMenuAtCurrentSection(exploration)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2
  
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  const sectionEadAt = sectionTop + sectionHeight

  const sectionEndPassedTargetline = sectionEadAt <= targetLine

      sectionEndPassedTargetline

  const sectionBoundaries =
  sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetline
  
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove ('active')
  if (sectionBoundaries) {
      menuElement.classList.add ('active')
  }
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #universe,
  #exploration`)
