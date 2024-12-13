
/*En Revision*/ 
document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    menuButton.addEventListener("click", function() {
        // Alterna la clase 'show-header' para mostrar/ocultar el menú
        mobileMenu.classList.toggle("show-header");
    });
});
