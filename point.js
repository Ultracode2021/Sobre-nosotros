const aboutMe = document.getElementById("unfold-card");
const seeAbout = document.getElementById("invite");
const logoPresent = document.getElementById("logo-click");
aboutMe.addEventListener("click", toggleAboutSect);

function toggleAboutSect() {
  window.scroll(0, 0);
  seeAbout.style.display = "flex";
  logoPresent.style.display = "none";
}
