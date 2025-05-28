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
  const html = document.querySelector("html")
  const metaDesc = document.querySelector("meta[name='description']");
  const h2 = document.querySelector("h2");
  const profile = document.getElementById("profile");
  const profileDesc = document.getElementById("description");
  const skills = document.getElementById("skills");
  const hobbies = document.getElementById("hobbies");
  const japan = document.getElementById("japan");
  const gaming = document.getElementById("gaming");
  const programming = document.getElementById("programming");
  const drawing = document.getElementById("drawing");
  const singing = document.getElementById("singing");
  const experience = document.getElementById("experience");
  const nothing = document.getElementById("nothing");
  const bac = document.getElementById("bac");
  const lycee = document.getElementById("lycee");
  const but = document.getElementById("but");
  const uca = document.getElementById("uca");
  const nameLabel = document.querySelector("label[for='name']");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const send = document.getElementById("send");
  const beforeWP = document.getElementById("beforeWP");
  const afterWP = document.getElementById("afterWP");

  if (html) metaDesc.setAttribute("lang", i18next.t("lang"));
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
  if (gaming) {
    gaming.setAttribute("alt", i18next.t("gaming"));
    gaming.setAttribute("title", i18next.t("gaming"));
  }
  if (programming) {
    programming.setAttribute("alt", i18next.t("programming"));
    programming.setAttribute("title", i18next.t("programming"));
  }
  if (drawing) {
    drawing.setAttribute("alt", i18next.t("drawing"));
    drawing.setAttribute("title", i18next.t("drawing"));
  }
  if (singing) {
    singing.setAttribute("alt", i18next.t("singing"));
    singing.setAttribute("title", i18next.t("singing"));
  }
  if (experience) experience.textContent = i18next.t("experience");
  if (nothing) nothing.textContent = i18next.t("nothing");
  if (bac) bac.textContent = i18next.t("bac");
  if (lycee) {
    lycee.textContent = "Lycée Théodore de Banville";
    if (i18next.language === "en") {
      lycee.textContent += " (High School)";
    }
  }
  if (but) but.textContent = i18next.t("but");
  if (uca) {
    uca.textContent = "Université Clermont Auvergne";
    if (i18next.language === "en") {
      uca.textContent += " (University)";
    }
  }
  if (nameLabel) nameLabel.textContent = i18next.t("nameLabel");
  if (name) name.setAttribute("placeholder", i18next.t("name"));
  if (email) email.setAttribute("placeholder", i18next.t("email"));
  if (message) message.setAttribute("placeholder", i18next.t("message"));
  if (send) send.textContent = i18next.t("send");
  if (beforeWP) beforeWP.textContent = i18next.t("footer.before");
  if (afterWP) afterWP.textContent = i18next.t("footer.after");

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