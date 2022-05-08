const navToggle: NodeListOf<Element> =
  document.querySelectorAll(".body-nav-toggle");
const mainBtns: NodeListOf<Element> = document.querySelectorAll(".main-btn");
const pageContent: NodeListOf<Element> =
  document.querySelectorAll(".main-content");
const main: HTMLElement = document.querySelector(".main");

// functions

// **********************************************
// TO DO
// AKTUALNY PROBLEM: NAGŁÓWEK TRACI KLASE ACTIVE PO PRZEŁADOWANIU STRONY
// ROZWIĄZANIA DO ZWERYFIKOWNIA:
// 1. ZAPOBIEC RESETOWANIU SIĘ JS PRZY ZMIANIE HTML
// 2.PO PRZEŁADOWANIU STRONY PONOWNE WYBRANIE KLASY (POZA EVENT LISTENEREM?)
// 3. PO PRZEŁADOWANIU STRONY ZCZYTAĆ ADRES STRONY I DZIĘKI NIEMU WYBRAĆ ODPOWIEDNIE PODŚWIETLENIE (ACTIVE?)
// 4. SPRAWDZIĆ NA YT POTENCJALNE ROZWIĄZANIA
// 5. ZROBIĆ CAŁĄ STRONĘ NA JEDNYM ARKUSZU HTML Z PRZEKIEROWANIAMI DO INNYCH BODY? BRZMI NAJLEPIEJ
// **************************************************

const changeTab = (e: Event): void => {
  const id: string = (e.target as HTMLInputElement).dataset.id;
  const objectClass: boolean = (
    e.target as HTMLInputElement
  ).classList.contains("body-nav-toggle");
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
  const id: string = (e.target as HTMLInputElement).dataset.id;
  const objectClass: boolean = (
    e.target as HTMLInputElement
  ).classList.contains("main-btn");
  if (objectClass) {
    if (id) {
      // remove active fromm all the btns
      for (let i of mainBtns) {
        i.classList.remove("active");
      }
      (e.target as HTMLInputElement).classList.add("active");
      changeUrl(id);
    }
  }
};
// const changePageSecond = (): void => {
//   let path: string = document.location.pathname.replace("/", "");
//   path = path.replace(".html", "");
//   // remove active fromm all the btns
//   for (let i of mainBtns) {
//     i.classList.remove("active");
//   }
//   const chosedBtn: HTMLElement = document.getElementById(`${path}`);
//   chosedBtn.classList.add("active");
// };

const changeContent = (e: Event): void => {
  const id: string = (e.target as HTMLInputElement).dataset.id;
  const objectClass: boolean = (
    e.target as HTMLInputElement
  ).classList.contains("body-nav-toggle");

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
const changeUrl = (id: string): void => {
  document.location = `${id}.html`;
};

main.addEventListener("click", (e: Event) => {
  const id = (e.target as HTMLInputElement).dataset.id;

  changeTab(e);
  changePage(e);
  changeContent(e);
  // Setting the active page class
});
// changePageSecond();
