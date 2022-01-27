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
