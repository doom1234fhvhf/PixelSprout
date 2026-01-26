/* ==============================
   Contact Form Validation
============================== */

const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = form.querySelector("input[name='name']");
    const email = form.querySelector("input[name='email']");
    const message = form.querySelector("textarea[name='message']");

    if (!name.value || !email.value || !message.value) {
      alert("Please fill out all fields.");
      return;
    }

    if (!email.value.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    alert("Thank you! Your message has been sent.");
    form.reset();
  });
}
