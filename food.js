document.addEventListener("DOMContentLoaded", function() {
    const icon = document.getElementById("menuIcon");
    const listItems = document.querySelector(".list-items");

    icon.addEventListener("click", function() {
        listItems.classList.toggle("show");
    });
    listItems.addEventListener("click", function() {
        listItems.classList.remove("show");
    });
});