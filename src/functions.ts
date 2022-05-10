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

import { navToggle, mainBtns, pageContent } from "./DOMElements.js";

export const changeTab = (e: Event): void => {
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

export const changePage = (e: Event): DOMTokenList => {
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
      changeUrl(id);
      return (e.target as HTMLInputElement).classList;
    }
  }
};

export const changeContent = (e: Event): void => {
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
export const changeUrl = (id: string): void => {
  document.location = `${id}.html`;
};

export const getTheWindowLocation = (): string => {
  let windowLocation = window.location.pathname;
  windowLocation = windowLocation.replace("/", "");
  windowLocation = windowLocation.replace(".html", "");
  return windowLocation;
};
