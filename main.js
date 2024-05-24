document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelectorAll(".nav-links");

  menuIcon.addEventListener("click", () => {
    navLinks.forEach((nav) => nav.classList.toggle("show"));
  });
});
