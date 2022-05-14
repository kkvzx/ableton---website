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
import { navToggle, pageContent, backToTopBtn, } from "./DOMElements.js";
// Changes color of the Tab in one html
export const changeTab = (e) => {
    const id = e.target.dataset.id;
    const objectClass = e.target.classList.contains("body-nav-toggle");
    if (objectClass) {
        if (id) {
            // remove active from all the buttons
            for (let i of navToggle) {
                i.classList.remove("active");
            }
            // color change that works only for body nav
            e.target.classList.add("active");
        }
    }
};
// higlighting of the current page and calling changeUrl()
// export const changePage = (e: Event): DOMTokenList => {
//   const id: string = (e.target as HTMLInputElement).dataset.id;
//   const objectClass: boolean = (
//     e.target as HTMLInputElement
//   ).classList.contains("main-btn");
//   if (objectClass) {
//     if (id) {
//       // remove active fromm all the btns
//       for (let i of mainBtns) {
//         i.classList.remove("active");
//       }
//       changeUrl(id);
//       return (e.target as HTMLInputElement).classList;
//     }
//   }
// };
// function that takes btnString (real class from DOM in order to ensure that there is no more than one active class)
// domBtnString list of Elements - thanks for this function can clear all the actives
// activator is a string that activate class from css
export const changePage = (e, btnString, domBtnString, activator) => {
    const id = e.target.dataset.id;
    const objectClass = e.target.classList.contains(`${btnString}`);
    if (objectClass) {
        if (id) {
            // remove active fromm all the btns
            for (let i of domBtnString) {
                i.classList.remove(`${activator}`);
            }
            // adding active class happens later - this function only removes active
            changeUrl(id);
            return e.target.classList;
        }
    }
};
// changes content of current html (tab swapping)
export const changeContent = (e) => {
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
// changing current page to diffrent .html file
export const changeUrl = (id) => {
    document.location = `${id}.html`;
};
// Returns location of current window in nicer form
export const getTheWindowLocation = () => {
    let windowLocation = window.location.pathname;
    windowLocation = windowLocation.replace("/", "");
    windowLocation = windowLocation.replace(".html", "");
    return windowLocation;
};
// Function that toggle some element after clicking interactive Element and made changes in text of this interactive element
export const TurnOnOffElement = (elementToPop, interactiveEl, activeClassString, stringBefore, stringAfter) => {
    elementToPop.classList.toggle(`${activeClassString}`);
    if (stringBefore && stringAfter) {
        if (elementToPop.classList.contains(`${activeClassString}`)) {
            interactiveEl.innerHTML = `${stringAfter}`;
        }
        else {
            interactiveEl.innerHTML = `${stringBefore}`;
        }
    }
};
export const scrollFunction = () => {
    if (document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
        // bodyNavDiv.classList.add("activeBodyNavDiv");
    }
    else {
        backToTopBtn.style.display = "none";
        // bodyNavDiv.classList.remove("activeBodyNavDiv");
    }
};
export const scrollToTop = () => {
    document.body.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
