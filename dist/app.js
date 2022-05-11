const navToggle = document.querySelectorAll(".body-nav-toggle");
const mainBtns = document.querySelectorAll(".main-btn");
const pageContent = document.querySelectorAll(".main-content");
const main = document.querySelector(".main");
const moreBtn = document.getElementById("special0");
const moreContent = document.querySelector(".moreDivContainer");
// functions
const changeTab = (e) => {
    const id = e.target.dataset.id;
    const objectClass = e.target.classList.contains("body-nav-toggle");
    if (objectClass) {
        if (id) {
            // remove active from all the buttons
            for (let i of navToggle) {
                i.classList.remove("active");
            }
            e.target.classList.add("active");
        }
    }
};
const changePage = (e) => {
    const id = e.target.dataset.id;
    const objectClass = e.target.classList.contains("main-btn");
    if (objectClass) {
        if (id) {
            // remove active fromm all the btns
            for (let i of mainBtns) {
                i.classList.remove("active");
            }
            e.target.classList.add("active");
        }
    }
};
const changeContent = (e) => {
    const id = e.target.dataset.id;
    const objectClass = e.target.classList.contains("body-nav-toggle");
    if (objectClass) {
        if (id) {
            // remove active from all the elements
            for (let i of pageContent) {
                i.classList.remove("activeLinks");
            }
            const element = document.getElementById(id);
            element.classList.add("activeLinks");
        }
    }
};
main.addEventListener("click", (e) => {
    changeTab(e);
    changePage(e);
    changeContent(e);
});
moreBtn.addEventListener("click", () => {
    moreContent.classList.toggle("activeMore");
    if (moreContent.classList.contains("activeMore")) {
        moreBtn.innerHTML = "More -";
    }
    else {
        moreBtn.innerHTML = "More +";
    }
});
