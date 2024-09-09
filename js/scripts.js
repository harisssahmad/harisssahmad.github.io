/**
 * Adjusts the opacity of the navigation bar based on the scroll position.
 * Updates the background color of the navigation bar to reflect the scroll position.
 */
const navOpacity = () => {
    var navbarBackground = document.getElementById("navbar");
    var scrollPosition = window.scrollY;

    if (scrollPosition < 600) {
        var opacity = scrollPosition / 600; // Calculate opacity based on scroll position

        // Cap opacity to a maximum of 1
        if (opacity > 1) {
            opacity = 1;
        }

        navbarBackground.style.backgroundColor =
            "rgba(255, 255, 255, " + opacity + ")";
    } else {
        navbarBackground.style.backgroundColor = "rgba(255, 255, 255, 1)";
    }
};

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", navOpacity);
});

navOpacity();

/**
 * Function to handle the behavior of the navbar on scroll.
 * It hides the navbar when scrolling down and shows it when scrolling up.
 * Adjust the threshold value to control when the navbar should hide/show.
 */
var prevScrollpos = window.scrollY || document.documentElement.scrollTop;
var navbar = document.getElementById("navbar");
var threshold = 94;

window.onscroll = function () {
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

/**
 * Toggles the visibility of the navigation menu by checking and unchecking the "nav-check" checkbox element.
 * If the checkbox is unchecked, it gets checked. If it is checked, it gets unchecked and triggers the toggleNav function.
 */
const hideNav = () => {
    if (document.getElementById("nav-check").checked == false) {
        document.getElementById("nav-check").checked = true;
    } else if (document.getElementById("nav-check").checked == true) {
        document.getElementById("nav-check").checked = false;
        toggleNav();
    }
};

/**
 * Retrieves the elements needed for small navigation functionality:
 * - smNavToggler: Element with the id "nav-check"
 * - smNavLinks: Element with the id "sm-nav-links"
 * - smNavLines: Collection of elements with the class "line"
 */
const smNavToggler = document.getElementById("nav-check");
const smNavLinks = document.getElementById("sm-nav-links");
const smNavLines = document.getElementsByClassName("line");

/**
 * Function that toggles the navigation menu on small devices.
 * Toggles the visibility of navigation links and applies transformations to navigation lines based on the state of the navigation toggler.
 */
const toggleNav = () => {
    if (smNavToggler.checked) {
        if (smNavLinks.classList.contains("hide-links")) {
            smNavLinks.classList.remove("hide-links");
            smNavLinks.classList.add("show-links");
        }
        for (var i = 0; i < smNavLines.length; i++) {
            smNavLines[i].classList.add("line" + (i + 1) + "-transform");
        }
    } else {
        if (smNavLinks.classList.contains("show-links")) {
            smNavLinks.classList.remove("show-links");
            smNavLinks.classList.add("hide-links");
        }
        for (var i = 0; i < smNavLines.length; i++) {
            smNavLines[i].classList.remove("line" + (i + 1) + "-transform");
        }
    }
};

/**
 * Listens for the DOMContentLoaded event and enables horizontal scrolling of a grid element
 * within the ".tools-and-tech > .tools-and-tech-container > .grid" structure based on the user's wheel actions.
 * Scrolls to the right when the user scrolls up and to the left when the user scrolls down.
 */
document.addEventListener("DOMContentLoaded", function () {
    const grid = document.querySelector(
        ".tools-and-tech > .tools-and-tech-container > .grid"
    );

    grid.addEventListener("wheel", function (event) {
        if (event.deltaY !== 0) {
            // Scroll to the right if the user scrolls up, and to the left if the user scrolls down
            grid.scrollLeft += event.deltaY * 5;
            event.preventDefault();
        }
    });
});
