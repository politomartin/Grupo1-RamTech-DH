const categories = document.getElementById("categories")
const burgerMenu = document.getElementById("burger-menu")


burgerMenu.addEventListener("click", () => {
    categories.classList.toggle("visible")
})


