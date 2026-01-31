const form = document.getElementById("contactForm");
const success = document.getElementById("formSuccess");
const messages = document.getElementById("messages");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Remove empty state if it exists
  const empty = document.querySelector(".empty-state");
  if (empty) empty.remove();

  
  const card = document.createElement("div");
  card.classList.add("message-card");

  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  card.innerHTML = `
    <h4>${name}</h4>
    <span>${email} • ${time}</span>
    <p>${message}</p>
  `;

  messages.prepend(card);

  // Reset form
  form.reset();


  success.style.display = "block";
  setTimeout(() => {
    success.style.display = "none";
  }, 3000);
});
