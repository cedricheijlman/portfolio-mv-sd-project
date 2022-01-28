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

// Tweede Pagina secties
const infoPage = document.querySelectorAll(".fadeIn");

// Verwijder begin screen FadeIn Second Screen
removeScreen = () => {

  // Verwijder Begin Scherm
  homePage.style.display = "none"

  // Display Tweede Scherm / Info Scherm
  infoPage.forEach(section => {
    section.classList.remove("fadeIn");
    section.classList.add("fadeInAnimation")
  })
}