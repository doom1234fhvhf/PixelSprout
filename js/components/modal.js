/* Modal Component*/

document.querySelectorAll("[data-modal-open]").forEach(btn => {
  btn.addEventListener("click", () => {
    const modalId = btn.dataset.modalOpen;
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add("active");
  });
});

document.querySelectorAll(".modal-close").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").classList.remove("active");
  });
});
