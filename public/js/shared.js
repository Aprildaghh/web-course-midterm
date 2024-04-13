// SEARCHBAR FOCUS COLOR CHANGE
const searchBar = document.getElementById("search");
const navSearch = document.querySelector(".nav-search");
const navSearchBtn = document.querySelector(".nav-search-btn");

searchBar.addEventListener("focusin", () => {
    navSearch.style.border = "2px solid #ff6000";
    navSearchBtn.style.background = "#ff6000";
})


searchBar.addEventListener("focusout", () => {
    navSearch.style.border = "2px solid #727272";
    navSearchBtn.style.background = "#727272";
})


