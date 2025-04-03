import "../css/style.css";
import "../css/visitor-center.css";

import { setHeaderFooter } from "./setHeaderFooter.mjs";

import { getParkData, getParkVisitorCenterDetails } from "./parkService.mjs";

import { parkInfoTemplate, listTemplate, vcImageTemplate, vcAmenityTemplate, vcInfoTemplate, vcAddressesTemplate, vcContactInfoTemplate } from "./templates.mjs";

function getParam(param) {

    const params = new URLSearchParams(window.location.search);
    return params.get(param);

}

async function setInformation(data) {

    document.querySelector(".vc-name").insertAdjacentHTML("beforeend", data.name);
    document.querySelector(".vc-info").insertAdjacentHTML("beforeend", vcInfoTemplate(data));
    document.querySelector("#vcAddresses").insertAdjacentHTML("beforeend", vcAddressesTemplate(data.addresses));
    document.querySelector("#vcDirections").insertAdjacentHTML("beforeend", `<p>${data.directionsInfo}</p>`);
    document.querySelector("#vcContact").insertAdjacentHTML("beforeend", vcContactInfoTemplate(data.contacts));
    document.querySelector(".vc-gallery").insertAdjacentHTML("beforeend", listTemplate(data.images, vcImageTemplate));

    const amenitiesHTML = listTemplate(data.amenities, vcAmenityTemplate);
    document.querySelector("#vcAmenities").insertAdjacentHTML("beforeend", amenitiesHTML);


//     const galleryHTML = listTemplate(data.images, vcImageTemplate);
//     document.querySelector("vc-gallery").insertAdjacentElement("beforeend", galleryHTML);
}

async function init() {

    const parkImage = document.querySelector("#park-hero > img");
    // const parkCode = "zion";

    const parkData = await getParkData();

    setHeaderFooter(parkData);

    parkImage.src = parkData.images[0].url;
    parkImage.alt = parkData.images[0].altText;
    const parkTemplate = document.querySelector("#hero-text");
    parkTemplate.innerHTML = parkInfoTemplate(parkData);

    const parkId = getParam("id");

    const visitorCenterDetails = await getParkVisitorCenterDetails(parkId);
    setInformation(visitorCenterDetails);
}

init();