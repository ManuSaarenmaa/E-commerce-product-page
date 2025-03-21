let menuBtn = document.querySelector(".menu-button");
let mobileNav = document.querySelector(".mobile-navbar");

let overlay = document.createElement("div");
overlay.classList.add("menu-overlay");
document.body.appendChild(overlay);

function openMenu() {
    mobileNav.style.display = "flex";
    overlay.style.display = "block"; 
}

function closeMenu() {
    mobileNav.style.display = "none";
    overlay.style.display = "none";
}

menuBtn.addEventListener("click", openMenu);