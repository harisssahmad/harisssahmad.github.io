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