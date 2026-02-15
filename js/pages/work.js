/* Work Page Scripts*/

document.querySelectorAll(".work-item").forEach(item => {
  item.addEventListener("click", () => {
    const modalId = item.dataset.modal;
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {

  const tags = document.querySelectorAll(".tech-tag");
  const modal = document.getElementById("techModal");
  const title = document.getElementById("techTitle");
  const description = document.getElementById("techDescription");
  const closeBtn = document.querySelector(".tech-close");

  if (!modal) return; // safety check

  const techContent = {
    html: {
      title: "HTML – The Structure of the Web",
      text: "HTML provides the structural foundation of a website. It defines headings, paragraphs, navigation, images, and semantic layout elements like <section> and <article>. It organizes content in a meaningful way."
    },
    css: {
      title: "CSS – Styling & Layout Systems",
      text: "CSS controls visual presentation. It manages layout systems like Flexbox and Grid, colors, spacing, typography, animations, and responsive behavior."
    },
    js: {
      title: "JavaScript – Interactivity & Logic",
      text: "JavaScript adds dynamic behavior to websites. It powers modals, animations, event handling, and interactive UI features without requiring frameworks."
    }
  };

  tags.forEach(tag => {
    tag.addEventListener("click", function () {
      const tech = this.dataset.tech;

      if (!techContent[tech]) return;

      title.textContent = techContent[tech].title;
      description.textContent = techContent[tech].text;

      modal.classList.add("active");
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.classList.remove("active");
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      modal.classList.remove("active");
    }
  });

});
