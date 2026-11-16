const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
    navLinks.classList.toggle("is-open", !isOpen);
    menuButton.innerHTML = isOpen ? '<i class="bi bi-list"></i>' : '<i class="bi bi-x-lg"></i>';
  });
  navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
    navLinks.classList.remove("is-open");
    menuButton.innerHTML = '<i class="bi bi-list"></i>';
  }));
}
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
