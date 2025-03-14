import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { getParkData, getAlerts} from "./parkService.mjs";
import { parkInfoTemplate, alertsTemplate } from "./templates.mjs";
// import { setIntro } from "./main";

// let parkTemplate = document.querySelector("#hero-text");

const parkImage = document.querySelector("#park-hero > img");

function setAlerts(alerts) {
    console.log(alerts);
    const alertsSection = document.querySelector("#alerts > ul");
    alerts.map(alert => alertsSection.innerHTML += alertsTemplate(alert));
}

async function init() {
    const parkData = await getParkData();
    setHeaderFooter(parkData);

    parkImage.src = parkData.images[0].url;
    parkImage.alt = parkData.images[0].altText;
    const parkTemplate = document.querySelector("#hero-text");
    parkTemplate.innerHTML = parkInfoTemplate(parkData);
    // document.querySelector(".intro").innerHTML = setIntro(parkData);

    const alerts = await getAlerts();
    setAlerts(alerts);
}

init();