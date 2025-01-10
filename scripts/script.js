// Smooth redirection
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Update the copyright date in the footer
document.addEventListener("DOMContentLoaded", () => {
  const copyrightDateSpan = document.getElementById("copyrightDate");
  const startYear = 2025;
  const currentYear = new Date().getFullYear();
  if (currentYear > startYear) {
    copyrightDateSpan.textContent = `${startYear} - ${currentYear}`;
  } else {
    copyrightDateSpan.textContent = `${startYear}`;
  }
});
