/* ==============================
   Work Page Scripts
============================== */

document.querySelectorAll(".work-item").forEach(item => {
  item.addEventListener("click", () => {
    const modalId = item.dataset.modal;
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add("active");
  });
});
