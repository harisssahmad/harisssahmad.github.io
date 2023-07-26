// For the navbar (opacity change on scroll)

const navOpacity = () => {
  var navbarBackground = document.getElementById('navbar');
  var scrollPosition = window.scrollY;

  if (scrollPosition < 600) {
    var opacity = scrollPosition / 600; // Calculate opacity based on scroll position

    // Cap opacity to a maximum of 1
    if (opacity > 1) {
      opacity = 1;
    }

    navbarBackground.style.backgroundColor = 'rgba(255, 255, 255, ' + opacity + ')';
  } else {
    navbarBackground.style.backgroundColor = 'rgba(255, 255, 255, 1)';
  }
}

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', navOpacity);
});

navOpacity();

// For the navbar (hide on scroll)

var prevScrollpos = window.scrollY || document.documentElement.scrollTop;
var navbar = document.getElementById("navbar");
var threshold = 94; // Adjust this value as needed

window.onscroll = function() {
  var currentScrollPos = window.scrollY || document.documentElement.scrollTop;
  var scrollDifference = Math.abs(currentScrollPos - prevScrollpos);
  
  if (scrollDifference >= threshold) {
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-94px";
    }
    
    prevScrollpos = currentScrollPos;
  }
};

// Function that closes the navbar when navbar link is clicked on sm devices:

const hideNav = () => {
    if(document.getElementById('nav-check').checked == false) {
        document.getElementById('nav-check').checked = true;
    }
    else if(document.getElementById('nav-check').checked == true) {
        document.getElementById('nav-check').checked = false;
        toggleNav();
    } 
}

const smNavToggler = document.getElementById('nav-check');
const smNavLinks = document.getElementById('sm-nav-links');
const smNavLines = document.getElementsByClassName('line')

// Function that toggles nav on sm devices:

const toggleNav = () => {
    if(smNavToggler.checked) {
        if(smNavLinks.classList.contains('hide-links')) {
            smNavLinks.classList.remove('hide-links')
            smNavLinks.classList.add('show-links')
        }
        for(var i = 0; i < smNavLines.length; i++) {
            smNavLines[i].classList.add('line' + (i+1) + '-transform')
        }
    } else {
        if(smNavLinks.classList.contains('show-links')) {
            smNavLinks.classList.remove('show-links')
            smNavLinks.classList.add('hide-links')
        }
        for(var i = 0; i < smNavLines.length; i++) {
            smNavLines[i].classList.remove('line' + (i+1) + '-transform')
        }
    }
}