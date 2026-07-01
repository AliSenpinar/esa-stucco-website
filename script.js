document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // Project image lightbox
  // =========================
  const images = document.querySelectorAll(".gallery-img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  let currentIndex = 0;

  if (images.length && lightbox && lightboxImg && closeBtn && nextBtn && prevBtn) {
    images.forEach((img, index) => {
      img.addEventListener("click", () => {
        currentIndex = index;
        lightboxImg.src = img.src;
        lightbox.classList.add("active");
      });
    });

    function showImage() {
      lightboxImg.src = images[currentIndex].src;
    }

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage();
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage();
    });

    closeBtn.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("active");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("active")) return;

      if (e.key === "ArrowRight") nextBtn.click();
      if (e.key === "ArrowLeft") prevBtn.click();
      if (e.key === "Escape") lightbox.classList.remove("active");
    });
  }

  // =========================
  // Mobile menu - new header
  // =========================
  const mobileToggle = document.querySelector("[data-mobile-toggle]");
  const mobilePanel = document.querySelector("[data-mobile-panel]");

  if (mobileToggle && mobilePanel) {
    mobileToggle.addEventListener("click", () => {
      mobilePanel.classList.toggle("open");
    });
  }

  // =========================
  // Mobile menu - old project pages
  // =========================
  const oldToggle = document.querySelector(".menu-toggle");
  const oldNavLinks = document.querySelector(".nav-links");

  if (oldToggle && oldNavLinks) {
    oldToggle.addEventListener("click", () => {
      oldNavLinks.classList.toggle("active");
    });
  }

  // =========================
  // Project filter buttons
  // =========================
  const filterButtons = document.querySelectorAll("[data-filter-btn]");
  const projectCards = document.querySelectorAll("[data-project-card]");

  if (filterButtons.length && projectCards.length) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const selectedFilter = button.getAttribute("data-filter-btn");

        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        projectCards.forEach((card) => {
          const category = card.getAttribute("data-category");

          if (selectedFilter === "all" || category === selectedFilter) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }
});