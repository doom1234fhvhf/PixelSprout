/* PixelSprout Core App*/

document.addEventListener("DOMContentLoaded", () => {
  console.log("🌱 PixelSprout loaded");

  highlightActiveNav();
});

function highlightActiveNav() {
  const links = document.querySelectorAll(".nav-links a");
  const currentPage = location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}
