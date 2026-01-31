/* Theme Controller (future-ready)*/

const themeToggle = document.querySelector("[data-theme-toggle]");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
  });
}
