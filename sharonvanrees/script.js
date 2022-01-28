// Begin Scherm
const homePage = document.querySelector(".homepage");

// Tweede Pagina secties
const infoPage = document.querySelectorAll(".fadeIn");

// verwijder begin screen FadeIn Second Screen
removeScreen = () => {

    // Verwijder Begin Scherm
    homePage.style.display = "none"

    // Display Tweede Scherm / Info Scherm
    infoPage.forEach(section => {
        section.classList.remove("fadeIn");
        section.classList.add("fadeInAnimation")
    })
}