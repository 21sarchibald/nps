import { getParkData } from "./parkService.mjs";

const parkData = getParkData();
const parkInfoLinks = getParkInfoLinks();

import { parkInfoTemplate } from "../templates.mjs";

let parkTemplate = document.querySelector("#hero-text");

parkTemplate.innerHTML = parkInfoTemplate(parkData);

const parkImage = document.querySelector("#park-hero > img");
parkImage.src = parkData.images[0].url;
parkImage.alt = parkData.images[0].altText;


function setIntro(data) {
    return `<h1 id="parkName">${data.fullName}</h1>
        <p id="parkDescription">${data.description}</p>`
}
document.querySelector(".intro").innerHTML = setIntro(parkData);

import { getParkInfoLinks } from "./parkService.mjs";

import { mediaCardTemplate } from "../templates.mjs";

const infoSection = document.querySelector(".info");
parkInfoLinks.map(section => infoSection.innerHTML += mediaCardTemplate(section));

import { setHeaderFooter } from "../setHeaderFooter.mjs";

setHeaderFooter(parkData);