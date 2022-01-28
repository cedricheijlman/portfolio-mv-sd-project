// Begin Scherm
const homePage = document.querySelector(".homepage");
const homePageUp = document.querySelector(".homepage__upper");
const homePageDown = document.querySelector(".homepage__down")
// Tweede Pagina secties
const infoPage = document.querySelectorAll(".fadeIn");

// Verwijder begin screen FadeIn Second Screen
removeScreen = () => {

    // Verwijder Begin Scherm
    homePage.style.width = "0"

    // Smooth Transition
    setInterval(() => {
        homePage.style.height = "0"
    }, 1000);

    setInterval(() => {
        homePageUp.style.display = "none"
        homePageDown.style.display = "none"
    }, 200);


    // Display Tweede Scherm / Info Scherm
    infoPage.forEach(section => {
        section.classList.remove("fadeIn");
        section.classList.add("fadeInAnimation")
    })

}