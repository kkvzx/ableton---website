import {
  changeTab,
  changePage,
  changeContent,
  changeUrl,
  getTheWindowLocation,
  TurnOnOffElement,
  scrollFunction,
  scrollToTop,
} from "./functions.js";

import {
  navToggle,
  mainBtns,
  pageContent,
  main,
  moreBtn,
  moreContent,
  popUpMenu,
  menuBtn,
  headerContainer,
  smallMenuUl,
  logo,
  mainTextPopUp,
  backToTopBtn,
  bodyNavDiv,
} from "./DOMElements.js";

// I somehow cannot export this from DOMElements -> bcs of the getTheWindowLocation()
const currentPage: NodeListOf<Element> = document.querySelectorAll(
  `[data-id="${getTheWindowLocation()}"]`
);
// Happens at the begin - Menu active page higlight
for (let i of currentPage) {
  i.classList.add("active");
}

// changing content of the 'tab' - about, jobs. appre
main.addEventListener("click", (e: Event) => {
  changeTab(e);
  changePage(e, "main-btn", mainBtns, "active");
  changeContent(e);
  changePage(e, "mainTextPopUp", mainTextPopUp, "active");
});

// Functionality of 'MORE+-' button
moreBtn.addEventListener("click", () => {
  TurnOnOffElement(moreContent, moreBtn, "activeMore", "More+", "More-");
});

// Functionality of "Menu+-" button on smaller width
menuBtn.addEventListener("click", () => {
  TurnOnOffElement(popUpMenu, menuBtn, "activePopUp", "Menu +", "Menu -");
  smallMenuUl.classList.toggle(`activeSmallPopUpList`);

  if (menuBtn.style.color === "white") {
    //Hiding of menu
    menuBtn.style.color = "black";
    headerContainer.style.background = "white";
    headerContainer.style.transition = "all 1s";
    headerContainer.style.transitionDelay = "0.2s";
    logo.src = "./img/logo.png";
  } else {
    // Showing menu
    menuBtn.style.color = "white";
    headerContainer.style.background = "var(--cc-spec1)";
    headerContainer.style.transition = "all 0s";
    logo.src = "./img/logo_white.png";
  }
});

// Hiding menu nad going back to default if user will resize page while menu is still open
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1060) {
    smallMenuUl.classList.remove(`activeSmallPopUpList`);
    popUpMenu.classList.remove(`activePopUp`);
    menuBtn.innerHTML = `Menu+`;
    headerContainer.style.background = "var(--cc-main)";
    logo.src = "./img/logo.png";
    menuBtn.style.color = "black";
  }
});

// Back to top sticky button
window.onwheel = () => {
  scrollFunction();
};

backToTopBtn.addEventListener("click", () => {
  scrollToTop();
});
