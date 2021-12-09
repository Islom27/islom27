const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
//Activating navbar
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
})
//Hiding navbar
document.querySelectorAll(".header_nav_link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navbar.classList.remove("active");
}))