const projects = document.querySelectorAll(".projectItem");
const bigProjects = document.querySelector(".project");
const experiencesShowBtn = document.querySelector(".experiencesBtn");
const projectsShowBtn = document.querySelector(".projectsBtn");

// Show Experiences Hide Big Projects
experiencesShowBtn.addEventListener("click", () => {
  projects.forEach((item) => {
    item.classList.remove("none");
  });
  bigProjects.classList.add("none");
});

// Hide Experiences Show Big Projects
projectsShowBtn.addEventListener("click", () => {
  projects.forEach((item) => {
    item.classList.add("none");
  });
  bigProjects.classList.remove("none");
});



// Begin Scherm
const homePage = document.querySelector(".homepage");
const homePageUp = document.querySelector(".homepage__upper");
const homePageDown = document.querySelector(".homepage__down");

// Tweede Pagina secties
const infoPage = document.querySelectorAll(".fadeIn");

// Verwijder begin screen FadeIn Second Screen
removeScreen = () => {

  // Verwijder Begin Scherm
  homePage.style.width = "0"

  // Smooth Transition
  setInterval(() => {
    homePageUp.style.display = "none"
    homePageDown.style.display = "none"
  }, 200);

  setInterval(() => {
    homePage.style.height = "0"
  }, 1000);

  // Display Tweede Scherm / Info Scherm
  infoPage.forEach(section => {
    section.classList.remove("fadeIn");
    section.classList.add("fadeInAnimation")
  })
}