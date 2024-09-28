const menuIcon = document.querySelector('#menu-icon'); // Corrected selector
const navbar = document.querySelector('.navbar');

// Toggle classes on click
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggles the 'bx-x' class on the menu icon
    navbar.classList.toggle('active'); // Toggles the 'active' class on the navbar
};
