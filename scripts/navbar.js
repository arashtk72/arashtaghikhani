const menuButton = document.getElementById('navbar-menu-button')
menuButton.classList.remove('menu-button-active')
const menuContainer = document.getElementById('menu-container')
let isMenuOpen = false
menuButton.addEventListener('click', (e) => {
    menuContainer.style.left = isMenuOpen ? '-100%' : '0'
    menuButton.classList.toggle('menu-button-active')
    isMenuOpen = !isMenuOpen
})
