const nav = document.getElementById("nav");
const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");


menu.addEventListener("click", (e) => {

    navbar.classList.add("flex-column", "mx-auto", "mt-5");
    nav.insertAdjacentElement("beforeend", navbar);
});
