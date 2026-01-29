/* 
   Accessibility Enhancements
 */

document.addEventListener("keyup", e => {
  if (e.key === "Escape") {
    closeAllModals();
  }
});

function closeAllModals() {
  document.querySelectorAll(".modal.active").forEach(modal => {
    modal.classList.remove("active");
  });
}
