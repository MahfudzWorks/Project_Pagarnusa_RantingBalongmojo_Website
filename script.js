// Humberger Menu
function toggleMenu() {
  const navMenu = document.querySelector(".navbar-menu");
  navMenu.classList.toggle("show");
}

// Animasi fade
const fadeInElements = document.querySelectorAll(
  ".fade-in-left, .fade-in-right, .fade-in-top, .fade-in-bottom, .fade-in-center"
);
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

fadeInElements.forEach((element) => observer.observe(element));

// Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
