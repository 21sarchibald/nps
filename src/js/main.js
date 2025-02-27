import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

function setHeaderInfo(data) {

const title = document.querySelector("head > title");
title.innerHTML = data.fullName;

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = data.url;
disclaimer.innerHTML = data.fullName;
}

setHeaderInfo(parkData);

function parkInfoTemplate(info) {
    return `<h1><a href="/" class="hero-title">${info.name}</a></h1>
    <p class="hero-subtitle">
        <span>${info.designation}</span>
        <span>${info.states}</span>
    </p>`;
}

let parkTemplate = document.querySelector("#hero-text");

parkTemplate.innerHTML = parkInfoTemplate(parkData);

const parkImage = document.querySelector("#park-hero > img");
parkImage.src = parkData.images[0].url;
parkImage.alt = parkData.images[0].altText;

const parkIntro = document.querySelector(".intro");

function setInfo(data) {
    return `<h1 id="parkName">${data.fullName}</h1>
        <p id="parkDescription">${data.description}</p>`
}
document.querySelector(".info").innerHTML = setInfo(parkData);