import i18next from "i18next";
import fr from "../locales/fr.json";
import en from "../locales/en.json";

i18next.init({
  lng: (localStorage.getItem("lang") || (navigator.language || navigator.userLanguage)).startsWith("fr") ? "fr" : "en",
  resources: {
    fr: { translation: fr },
    en: { translation: en },
  }
}).then(updateText);

function updateLangVisual(currentLang) {
  const frBtn = document.getElementById("lang-fr");
  const enBtn = document.getElementById("lang-en");

  if (frBtn && enBtn) {
    if (currentLang === "fr") {
      frBtn.classList.remove("grayscale");
      enBtn.classList.add("grayscale");
    } else {
      enBtn.classList.remove("grayscale");
      frBtn.classList.add("grayscale");
    }
  }
}

function updateText() {
  const metaDesc = document.querySelector("meta[name='description']");
  const h2 = document.querySelector("h2");
  const profile = document.getElementById("profile");
  const profileDesc = document.getElementById("description");
  const skills = document.getElementById("skills");
  const hobbies = document.getElementById("hobbies");
  const japan = document.getElementById("japan");

  if (metaDesc) metaDesc.setAttribute("content", i18next.t("description"));
  if (h2) h2.textContent = i18next.t("h2");
  if (profile) profile.textContent = i18next.t("profile");
  if (profileDesc) profileDesc.textContent = i18next.t("description");
  if (skills) skills.textContent = i18next.t("skills");
  if (hobbies) hobbies.textContent = i18next.t("hobbies");
  if (japan) {
    japan.setAttribute("alt", i18next.t("japan"));
    japan.setAttribute("title", i18next.t("japan"));
  } 

  updateLangVisual(i18next.language);
}

document.addEventListener("DOMContentLoaded", () => {
  const frBtn = document.getElementById("lang-fr");
  const enBtn = document.getElementById("lang-en");

  if (frBtn) {
    frBtn.addEventListener("click", () => {
      i18next.changeLanguage("fr").then(() => {
        localStorage.setItem("lang", "fr");
        updateText();
      });
    });
  }

  if (enBtn) {
    enBtn.addEventListener("click", () => {
      i18next.changeLanguage("en").then(() => {
        localStorage.setItem("lang", "en");
        updateText();
      });
    });
  }
});