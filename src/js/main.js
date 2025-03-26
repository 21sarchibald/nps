import "../css/style.css";
import "../css/home.css";

import { getParkData } from "./parkService.mjs";

import { parkInfoTemplate } from "./templates.mjs";

const parkImage = document.querySelector("#park-hero > img");

export function setIntro(data) {
    return `<h1 id="parkName">${data.fullName}</h1>
        <p id="parkDescription">${data.description}</p>`;
}

import { getParkInfoLinks } from "./parkService.mjs";

import { mediaCardTemplate } from "./templates.mjs";

import { setHeaderFooter } from "./setHeaderFooter.mjs";


async function init() {
    const parkData = await getParkData();

    const parkInfoLinks = await getParkInfoLinks();

    const infoSection = document.querySelector(".info");

    // const html = parkInfoLinks.map(mediaCardTemplate);

    // infoSection.insertAdjacentElement("afterbegin", html.join(""));

    parkInfoLinks.map(section => infoSection.innerHTML += mediaCardTemplate(section));
    
    setHeaderFooter(parkData);

    parkImage.src = parkData.images[0].url;
    parkImage.alt = parkData.images[0].altText;
    const parkTemplate = document.querySelector("#hero-text");
    parkTemplate.innerHTML = parkInfoTemplate(parkData);
    
}


init();
// enableNavigation();