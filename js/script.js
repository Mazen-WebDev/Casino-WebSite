let toggleIcon = document.querySelector("#burgericon");
let navBar = document.querySelector("nav");
let uListLi = document.querySelectorAll("ul li a");

toggleIcon.addEventListener("click", () => {
    navBar.classList.toggle("show");
});

uListLi.forEach((a) => {
    a.addEventListener("click", () => {
        navBar.classList.remove("show");
    });
});