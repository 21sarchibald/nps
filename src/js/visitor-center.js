import "../css/style.css";
import "../css/visitor-center.css";

import { setHeaderFooter } from "./setHeaderFooter.mjs";

import { getParkData, getParkVisitorCenterDetails } from "./parkService.mjs";

import { parkInfoTemplate } from "./templates.mjs";

function getParam(param) {

    const params = new URLSearchParams(window.location.search);
    return params.get(param);

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

    const visitorCenterDetails = getParkVisitorCenterDetails(parkId);

}

init();