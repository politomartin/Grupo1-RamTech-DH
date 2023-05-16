const burgerMenu = document.getElementById("burger-menu");
const categories = document.getElementById("categories");

burgerMenu.addEventListener("click", function () {
    categories.classList.toggle("invisible");
    categories.classList.toggle("visible");
});
