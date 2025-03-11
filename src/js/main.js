import { getParkData } from "./parkService.mjs";

import { parkInfoTemplate } from "./templates.mjs";

let parkTemplate = document.querySelector("#hero-text");

const parkImage = document.querySelector("#park-hero > img");

export function setIntro(data) {
    return `<h1 id="parkName">${data.fullName}</h1>
        <p id="parkDescription">${data.description}</p>`
}

import { getParkInfoLinks } from "./parkService.mjs";

import { mediaCardTemplate } from "./templates.mjs";

const infoSection = document.querySelector(".info");

import { setHeaderFooter } from "./setHeaderFooter.mjs";


async function init() {
    const parkData = await getParkData();

    var parkInfoLinks = await getParkInfoLinks();

    parkInfoLinks.map(section => infoSection.innerHTML += mediaCardTemplate(section));
    
    setHeaderFooter(parkData);

    parkImage.src = parkData.images[0].url;
    parkImage.alt = parkData.images[0].altText;
    parkTemplate.innerHTML = parkInfoTemplate(parkData);
    document.querySelector(".intro").innerHTML = setIntro(parkData);
    
}

init();