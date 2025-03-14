// burger menu
const burger = document.querySelector(".burger__menu");
const headerA = document.querySelector(".header__action");
burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    headerA.classList.toggle("open");
});

// faq menu
const faq = document.querySelector(".faq__action");
faq.addEventListener("click", () => {
    faq.classList.toggle("open");
})