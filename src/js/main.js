import { getParkData } from "./parkService.mjs";

import { parkInfoTemplate } from "../templates.mjs";

const parkInfoLinks = getParkInfoLinks();

let parkTemplate = document.querySelector("#hero-text");

const parkImage = document.querySelector("#park-hero > img");

function setIntro(data) {
    return `<h1 id="parkName">${data.fullName}</h1>
        <p id="parkDescription">${data.description}</p>`
}

import { getParkInfoLinks } from "./parkService.mjs";

import { mediaCardTemplate } from "../templates.mjs";

const infoSection = document.querySelector(".info");
parkInfoLinks.map(section => infoSection.innerHTML += mediaCardTemplate(section));

import { setHeaderFooter } from "../setHeaderFooter.mjs";


async function init() {
    const parkData = await getParkData();
    
    setHeaderFooter(parkData);

    parkImage.src = parkData.images[0].url;
    parkImage.alt = parkData.images[0].altText;
    parkTemplate.innerHTML = parkInfoTemplate(parkData);
    document.querySelector(".intro").innerHTML = setIntro(parkData);
    
}

init();