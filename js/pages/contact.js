/* ==============================
   Contact Page Enhancements
============================== */

const inputs = document.querySelectorAll("input, textarea");

inputs.forEach(input => {
  input.addEventListener("focus", () => {
    input.style.borderColor = "#3ddc97";
  });

  input.addEventListener("blur", () => {
    input.style.borderColor = "";
  });
});
