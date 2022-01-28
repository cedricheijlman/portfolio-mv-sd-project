// Begin Scherm
const homePage = document.querySelector(".homepage");

// Tweede Pagina secties
const infoPage = document.querySelectorAll(".fadeIn");

// fadeOut begin screen FadeIn Second Screen
removeScreen = () => {
    // Voeg fadeOut animatie aan begin scherm
    homePage.classList.add('fadeOutAnimation')

    // Na fadeOut animatie / 0.9secondes
    setInterval(() => {
        // Verwijder Begin Scherm
        homePage.style.display = "none"

        // Display Tweede Scherm / Info Scherm
        infoPage.forEach(section => {
            section.classList.remove("fadeIn");
            section.classList.add("fadeInAnimation")
        })

    }, 900);

}