import { changeTab, changePage, changeContent, getTheWindowLocation, } from "./functions.js";
import { main, moreBtn, moreContent, } from "./DOMElements.js";
// I somehow cannot export this from DOMElements -> bcs of the getTheWindowLocation()
const currentPage = document.querySelector(`[data-id*="${getTheWindowLocation()}"]`);
// Happens at the begin
main.addEventListener("click", (e) => {
    changeTab(e);
    changePage(e);
    changeContent(e);
    // console.log(currentActiveClass);
});
currentPage.classList.add("active");
// Setting the active page class from global var
// console.log(currentActiveClass);
moreBtn.addEventListener("click", () => {
    moreContent.classList.toggle("activeMore");
    if (moreContent.classList.contains("activeMore")) {
        moreBtn.innerHTML = "More -";
    }
    else {
        moreBtn.innerHTML = "More +";
    }
});
