const modal = document.getElementById("section-modal");
const backdrop = document.getElementById("section-modal-backdrop");
const closeBtn = document.getElementById("section-modal-close");
const title = document.getElementById("section-modal-heading");
const text = document.getElementById("section-modal-body");
const label = document.getElementById("section-modal-section-label");
const modalImg = document.getElementById("section-modal-image");
const media = document.getElementById("section-modal-media");
const logo = document.querySelector(".header__logo-image");
const STORAGE_KEY = "site-theme";
document.querySelectorAll(".buttons").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    let section = btn.closest("section");
    let h2 = section.querySelector("h2");
    let p = section.querySelector("p");
    let img = section.querySelector("img");
    title.textContent = h2.textContent;
    text.textContent = p.textContent;
    if (section.classList.contains("easy")) {
      label.textContent = "Easy · overview";
    } else if (section.classList.contains("city")) {
      label.textContent = "City · overview";
    } else {
      label.textContent = "Section · overview";
    }

    if (img) {
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      media.hidden = false;
    }
    modal.classList.add("is-open");
  });
});

function closeModal() {
  modal.classList.remove("is-open");
  modalImg.src = "";
  modalImg.alt = "";
  media.hidden = true;
}

closeBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

function setTheme(mode) {
  document.documentElement.dataset.theme = mode;
  if (mode === "night") {
    logo.src = "./icons/white__logo.svg";
    document.querySelectorAll(".header__theme-btn--day").forEach((btn) => {
      btn.style.display = "inline-block";
    });
    document.querySelectorAll(".header__theme-btn--night").forEach((btn) => {
      btn.style.display = "none";
    })
  } else {
    logo.src = "./icons/dark__logo.svg";
      document.querySelectorAll(".header__theme-btn--night").forEach((btn) => {
      btn.style.display = "inline-block";
    })
     document.querySelectorAll(".header__theme-btn--day").forEach((btn) => {
      btn.style.display = "none";
    });
  }
  localStorage.setItem(STORAGE_KEY, mode);
}
document.querySelectorAll(".header__theme-btn--day").forEach((btn) => {
  btn.addEventListener("click", () => {
    setTheme("day");
  });
});
document.querySelectorAll(".header__theme-btn--night").forEach((btn) => {
  btn.addEventListener("click", () => {
    setTheme("night");
  });
});

let savedTheme = localStorage.getItem(STORAGE_KEY);
if (savedTheme) {
  setTheme(savedTheme);
}
