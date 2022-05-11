const navToggle: NodeListOf<Element> =
  document.querySelectorAll(".body-nav-toggle");
const mainBtns: NodeListOf<Element> = document.querySelectorAll(".main-btn");
const pageContent: NodeListOf<Element> =
  document.querySelectorAll(".main-content");
const main: HTMLElement = document.querySelector(".main");

const moreBtn: HTMLElement = document.getElementById("special0");
const moreContent: Element = document.querySelector(".moreDivContainer");
// functions

const changeTab = (e: Event): void => {
  const id: string = (e.target as HTMLInputElement).dataset.id;
  const objectClass = (e.target as HTMLInputElement).classList.contains(
    "body-nav-toggle"
  );
  if (objectClass) {
    if (id) {
      // remove active from all the buttons
      for (let i of navToggle) {
        i.classList.remove("active");
      }
      (e.target as HTMLInputElement).classList.add("active");
    }
  }
};

const changePage = (e: Event): void => {
  const id = (e.target as HTMLInputElement).dataset.id;
  const objectClass = (e.target as HTMLInputElement).classList.contains(
    "main-btn"
  );
  if (objectClass) {
    if (id) {
      // remove active fromm all the btns
      for (let i of mainBtns) {
        i.classList.remove("active");
      }
      (e.target as HTMLInputElement).classList.add("active");
    }
  }
};

const changeContent = (e: Event): void => {
  const id: string = (e.target as HTMLInputElement).dataset.id;
  const objectClass = (e.target as HTMLInputElement).classList.contains(
    "body-nav-toggle"
  );

  if (objectClass) {
    if (id) {
      // remove active from all the elements
      for (let i of pageContent) {
        i.classList.remove("activeLinks");
      }
      const element: HTMLElement = document.getElementById(id);
      element.classList.add("activeLinks");
    }
  }
};

main.addEventListener("click", (e: Event) => {
  changeTab(e);
  changePage(e);
  changeContent(e);
});

moreBtn.addEventListener("click", () => {
  moreContent.classList.toggle("activeMore");

  if (moreContent.classList.contains("activeMore")) {
    moreBtn.innerHTML = "More -";
  } else {
    moreBtn.innerHTML = "More +";
  }
});
