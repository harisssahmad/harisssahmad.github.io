var pageWidth = document.body.clientWidth;

// Fade in INITIAL Left and Right for SM Screen Size
const animateInitSMLeft = document.querySelectorAll('.animate-init-sm-left')
const animateInitSMRight = document.querySelectorAll('.animate-init-sm-right')

// Fade in INITIAL simple for SM Screen Size
const animateInitSMSimple = document.querySelectorAll('.animate-init-sm-simple')

// Fade in INITIAL Left and Right for LG Screen Size
const animateInitLGLeft = document.querySelectorAll('.animate-init-lg-left')
const animateInitLGRight = document.querySelectorAll('.animate-init-lg-right')

// Fade in INITIAL simple for LG Screen Size
const animateInitLGSimple = document.querySelectorAll('.animate-init-lg-simple')

// Fade in all directions and simple regardless of screen size
const animateElementsLeft = document.querySelectorAll('.animate-left')
const animateElementsRight = document.querySelectorAll('.animate-right')
const animateElementsDown = document.querySelectorAll('.animate-down')
const animateElementsUp = document.querySelectorAll('.animate-up')
const animateElementsSimple = document.querySelectorAll('.animate-simple')

// Fade in all directions and simple for LG screen size
const animateElementsLGLeft = document.querySelectorAll('.animate-lg-left')
const animateElementsLGRight = document.querySelectorAll('.animate-lg-right')
const animateElementsLGUp = document.querySelectorAll('.animate-lg-up')
const animateElementsLGDown = document.querySelectorAll('.animate-lg-down')
const animateElementsLGSimple = document.querySelectorAll('.animate-lg-simple')

// Fade in all directions and simple for SM screen size
const animateElementsSMLeft = document.querySelectorAll('.animate-sm-left')
const animateElementsSMRight = document.querySelectorAll('.animate-sm-right')
const animateElementsSMUp = document.querySelectorAll('.animate-sm-up')
const animateElementsSMDown = document.querySelectorAll('.animate-sm-down')
const animateElementsSMSimple = document.querySelectorAll('.animate-sm-simple')

let prevScrollPos = window.pageYOffset;

const isScrolledIntoView = (element) => {
  const elementTop = element.getBoundingClientRect().top;
  const elementHeight = element.offsetHeight;
  const windowHeight = window.innerHeight;

  return elementTop + elementHeight >= 0 && elementTop <= windowHeight;
}

const checkAndAddAnimation = (element, addClass) => {
  if (isScrolledIntoView(element) && !element.classList.contains(addClass)) {
    element.classList.add(addClass);
  }
  else if (!isScrolledIntoView(element) && element.classList.contains(addClass)) {
    element.classList.remove(addClass);
  }
}

if (pageWidth <= 991) {
  // initial left sm elements
  animateInitSMLeft.forEach((element) => checkAndAddAnimation(element, 'animate__fadeInLeft'));

  // initial right sm elements
  animateInitSMRight.forEach((element) => checkAndAddAnimation(element, 'animate__fadeInRight'));

  // initial simple sm elements
  animateInitSMSimple.forEach((element) => checkAndAddAnimation(element, 'animate__fadeIn'));
} else {
  // initial left sm elements
  animateInitLGLeft.forEach((element) => checkAndAddAnimation(element, 'animate__fadeInLeft'));

  // initial right sm elements
  animateInitLGRight.forEach((element) => checkAndAddAnimation(element, 'animate__fadeInRight'));

  // initial simple lg elements
  animateInitLGSimple.forEach((element) => checkAndAddAnimation(element, 'animate__fadeIn'));
}

const handleScroll = () => {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos > prevScrollPos) {
    // Scrolling down

    // left elements
    animateElementsLeft.forEach((element) => checkAndAddAnimation(element, 'animate__fadeInLeft'));
    
    // right elements
    animateElementsRight.forEach((element) => checkAndAddAnimation(element, 'animate__fadeInRight'));

    // down elements
    animateElementsDown.forEach((element) => checkAndAddAnimation(element, 'animate__fadeInDown'));

    // up elements
    animateElementsUp.forEach((element) => checkAndAddAnimation(element, 'animate__fadeInUp'));

	// simple elements
    animateElementsSimple.forEach((element) => checkAndAddAnimation(element, 'animate__fadeIn'));

    // LG size
    if(pageWidth > 991) {
      // left elements
      animateElementsLGLeft.forEach((element) => checkAndAddAnimation(element, 'animate__fadeInLeft'));
      
      // right elements
      animateElementsLGRight.forEach((element) => checkAndAddAnimation(element, 'animate__fadeInRight'));

      // up elements
      animateElementsLGUp.forEach((element) => checkAndAddAnimation(element, 'animate__fadeInUp'));

      // down elements
      animateElementsLGDown.forEach((element) => checkAndAddAnimation(element, 'animate__fadeInDown'));

	  // simple elements
      animateElementsLGSimple.forEach((element) => checkAndAddAnimation(element, 'animate__fadeIn'));

    } else { // SM size

      // left elements
      animateElementsSMLeft.forEach((element) => checkAndAddAnimation(element, 'animate__fadeInLeft'));
      
      // right elements
      animateElementsSMRight.forEach((element) => checkAndAddAnimation(element, 'animate__fadeInRight'));

	  // up elements
      animateElementsSMUp.forEach((element) => checkAndAddAnimation(element, 'animate__fadeInUp'));

      // down elements
      animateElementsSMDown.forEach((element) => checkAndAddAnimation(element, 'animate__fadeInDown'));

	  // simple elements
      animateElementsSMSimple.forEach((element) => checkAndAddAnimation(element, 'animate__fadeIn'));
    }
  }

  prevScrollPos = currentScrollPos;
}

window.addEventListener('scroll', handleScroll);