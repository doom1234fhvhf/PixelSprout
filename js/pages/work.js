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
    },
    
    responsive: {
      title: "Responsive Design – Adaptive Layouts",
      text: "Responsive design ensures a website adapts to different screen sizes and devices. Using CSS media queries, flexible grids, relative units, and scalable images, the layout adjusts for desktop, tablet, and mobile screens."
    },


    branding: {
      title: "Branding – Visual Identity Systems",
      text: "Branding defines how a company presents itself visually and emotionally. It includes logos, color systems, voice, and consistent design standards that create recognition and trust."
    },

    design: {
      title: "Design – Visual Communication",
      text: "Design combines layout, hierarchy, color theory, and spacing to communicate ideas clearly. Strong design improves usability while maintaining visual appeal."
    },

    typography: {
      title: "Typography – Structured Text Systems",
      text: "Typography controls font selection, hierarchy, readability, and spacing. Effective typography improves clarity and strengthens brand personality."
    },


    ui: {
      title: "UI – User Interface Design",
      text: "User Interface (UI) design focuses on the visual and interactive elements users engage with. It includes layout structure, buttons, spacing, colors, and visual hierarchy to create an intuitive interface."
    },

    ux: {
      title: "UX – User Experience Design",
      text: "User Experience (UX) design focuses on how users feel while interacting with a product. It includes usability, navigation flow, accessibility, and overall efficiency to ensure a smooth experience."
    },

    accessibility: {
      title: "Accessibility – Inclusive Design",
      text: "Accessibility ensures websites are usable by people of all abilities. This includes proper color contrast, semantic HTML, keyboard navigation, alt text for images, and screen reader compatibility."
    },



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
