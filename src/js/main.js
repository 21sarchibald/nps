import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const title = document.querySelector("head > title");
title.innerHTML = parkData.fullName;

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

function parkInfoTemplate(info) {
    return `<a href="/" class="hero-title">${info.name}</a>
    <p class="hero-subtitle">
        <span>${info.designation}</span>
        <span>${info.states}</span>
    </p>`;
}

const parkTemplate = document.querySelector("#hero-text");

parkTemplate = parkInfoTemplate(parkData);

const parkImage = document.querySelector("#park-hero > img");
parkImage.src = parkData.images[0].url;
parkImage.alt = parkData.images[0].altText;