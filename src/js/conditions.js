import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { getParkData, getAlerts, getVisitorCenterData } from "./parkService.mjs";
import { parkInfoTemplate, alertsTemplate, visitorCenterTemplate } from "./templates.mjs";
// import { setIntro } from "./main";

// let parkTemplate = document.querySelector("#hero-text");

const parkImage = document.querySelector("#park-hero > img");
const parkCode = "zion";

function setAlerts(alerts) {
    console.log(alerts);
    const alertsSection = document.querySelector("#alerts > ul");
    alerts.map(alert => alertsSection.innerHTML += alertsTemplate(alert));
}

function setVisitorCenterInfo(visitorCenterInfo) {
    const visitorCenterSection = document.querySelector("#visitorServices details > ul");
    // const html = visitorCenterInfo.map(visitorCenterTemplate);
    // visitorCenterSection.insertAdjacentElement("afterbegin", html.join(""));
    visitorCenterInfo.map(center => visitorCenterSection.innerHTML += visitorCenterTemplate(center));
}

async function init() {
    const parkData = await getParkData();
    setHeaderFooter(parkData);

    parkImage.src = parkData.images[0].url;
    parkImage.alt = parkData.images[0].altText;
    const parkTemplate = document.querySelector("#hero-text");
    parkTemplate.innerHTML = parkInfoTemplate(parkData);
    // document.querySelector(".intro").innerHTML = setIntro(parkData);

    const alerts = await getAlerts(parkCode);
    setAlerts(alerts);

    const visitorCenterInfo = await getVisitorCenterData(parkCode);
    setVisitorCenterInfo(visitorCenterInfo);
}

document.addEventListener("DOMContentLoaded", init());