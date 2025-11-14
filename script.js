// Menu burger
var MenuBurger = document.getElementById("IDMenuBurger");
var menuBurgerIcon = document.querySelector(".menu-burger");
var burgerIcon = document.querySelector(".menu-burger i");
var isOpen = false;

menuBurgerIcon.addEventListener("click", function() {
    if (window.innerWidth < 768) {
        isOpen = !isOpen;
        MenuBurger.classList.toggle("active", isOpen);
        
        if (isOpen) {
            burgerIcon.classList.remove("fa-bars");
            burgerIcon.classList.add("fa-xmark");
        } else {
            burgerIcon.classList.remove("fa-xmark");
            burgerIcon.classList.add("fa-bars");
        }
    }
});

// Reset menu on window resize
window.addEventListener("resize", function() {
    if (window.innerWidth >= 768) {
        MenuBurger.classList.remove("active");
        burgerIcon.classList.remove("fa-xmark");
        burgerIcon.classList.add("fa-bars");
        isOpen = false;
    }
});

// Bouton retour en haut
const btnUp = document.querySelector(".btn-up");

if (btnUp) {
    btnUp.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
}

// Fermer le menu en cliquant sur un lien
const menuLinks = document.querySelectorAll(".MenuBurger a");
menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        if (window.innerWidth < 768) {
            MenuBurger.classList.remove("active");
            burgerIcon.classList.remove("fa-xmark");
            burgerIcon.classList.add("fa-bars");
            isOpen = false;
        }
    });
});