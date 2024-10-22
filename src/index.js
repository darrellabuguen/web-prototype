const body = document.querySelector("body");

function showMenu() {
    const bars = document.querySelectorAll(".bar");
    const mb_menu = document.querySelector(".mb-menu");

    bars.forEach(bar => {
        let check = bar.classList.contains("animated");
        if (!check) {
            bar.classList.add("animated");
            mb_menu.classList.add("animate");
            body.style.overflow = "hidden";
        }
        else {
            bar.classList.remove("animated");
            mb_menu.classList.remove("animate");
            body.style.overflow = "auto";
        }
    });
}

function showSubMenu() {
    const mb_dropdown = document.querySelector(".mb-dropdown-items");
    let check = mb_dropdown.classList.contains("closed");

    if (check) {
        mb_dropdown.style.height = `${mb_dropdown.scrollHeight}px`;
        mb_dropdown.classList.remove("closed");
    }
    else {
        mb_dropdown.style.height = "0px";
        mb_dropdown.classList.add("closed");
    }
}

function changeContactState() {
    const contact = document.querySelector(".contact-container");
    const contactForm = contact.querySelector(".contact-form");
    let check = contactForm.classList.contains("animate");

    if (check) {
        contactForm.classList.remove("animate");
        contact.style.opacity = "0";
        contact.style.zIndex = "0";
        contact.style.visibility = "hidden";
        body.style.overflow = "auto";
    }
    else {
        contactForm.classList.add("animate");
        contact.style.opacity = "1";
        contact.style.zIndex = "3";
        contact.style.visibility = "visible";
        body.style.overflow = "hidden";
    }
}