import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { getParkData } from "./parkService.mjs";
import { parkInfoTemplate } from "./templates.mjs";
import { setIntro } from "./main";

let parkTemplate = document.querySelector("#hero-text");

const parkImage = document.querySelector("#park-hero > img");


async function init() {
    const parkData = await getParkData();
    setHeaderFooter(parkData);

    parkImage.src = parkData.images[0].url;
    parkImage.alt = parkData.images[0].altText;
    parkTemplate.innerHTML = parkInfoTemplate(parkData);
    document.querySelector(".intro").innerHTML = setIntro(parkData);
}

init();