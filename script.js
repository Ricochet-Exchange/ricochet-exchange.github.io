const menu = document.querySelector(".mobile-menu-list");
const hamburger= document.querySelector(".burder-menu-btn");
const closeIcon= document.querySelector(".close-menu-btn");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  } else {
    menu.classList.add("showMenu");
  }
}

function closeMenu() {
  menu.classList.remove("showMenu");
}

hamburger.addEventListener("click", toggleMenu);

closeIcon.addEventListener("click", closeMenu);