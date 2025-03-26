function buildMainMenu(ev) {
    const globalNav = document.querySelector(".global-nav");
    console.log(globalNav);
    let target = ev.target;
    globalNav.classList.toggle("show");

    if (!target.matches("button")) {
            target = target.closest("button");
    }

    if (globalNav.classList.contains("show")) {
        target.setAttribute("aria-expanded", "true");
    }

    else {
        target.setAttribute("aria-expanded", "false");
    }

}

function buildSubmenu(ev) {
    ev.currentTarget.closest("li").querySelector(".global-nav-sublist").classList.toggle("show");
    ev.currentTarget.querySelector(".icon").classList.toggle("rotate");
}

export function enableNavigation() {

    const menuButton = document.querySelector("#global-nav-toggle");
    menuButton.addEventListener("click", buildMainMenu);

    const openSubListButtons = document.querySelectorAll(".global-nav__split-button__toggle");
    openSubListButtons.forEach((button) => {
        button.addEventListener("click", buildSubmenu);
    });
}