import { footerTemplate } from "./templates.mjs";

import { enableNavigation } from "./navigation.mjs";

function setHeaderInfo(data) {

    const title = document.querySelector("head > title");
    title.innerHTML = data.fullName;
    
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;
    }

function setFooter(data) {

    document.querySelector("#park-footer").innerHTML = footerTemplate(data);
    
}

export function setHeaderFooter(data) {
    setHeaderInfo(data);
    setFooter(data);
    enableNavigation();
}