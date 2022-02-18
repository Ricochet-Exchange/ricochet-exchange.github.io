const menu = document.querySelector(".mobile-menu-list");
const hamburger = document.querySelector(".hamburger");

function toggleMenu() {
  if (hamburger.classList.contains("is-active")) {
    hamburger.classList.remove("is-active");
    menu.classList.remove("showMenu");
  } else {
    hamburger.classList.add("is-active");
    menu.classList.add("showMenu");
  }
}

hamburger.addEventListener("click", toggleMenu);