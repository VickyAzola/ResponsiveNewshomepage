const nav = document.getElementById("Menu");
const backNav = document.getElementById("backMenu")

function showNavMenu() {
    if (nav.className === "Menu") {
        nav.className += " responsive";
        backNav.classList.remove("hidden")
    } else {
        nav.className = "Menu";
        backNav.classList.add("hidden")
    }
}

function closeNavMenu() {
    if (nav.className === "Menu") {
        nav.className += " responsive";
        backNav.classList.remove("hidden")
    } else {
        nav.className = "Menu";
        backNav.classList.add("hidden")
    }
}