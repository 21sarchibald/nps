import spritePath from "../images/sprite.symbol.svg";

export function parkInfoTemplate(info) {
    return `<h1><a href="/" class="hero-title">${info.name}</a></h1>
    <p class="hero-subtitle">
        <span>${info.designation}</span>
        <span>${info.states}</span>
    </p>`;
}

export function mediaCardTemplate(info) {
    return `
    <div>
    <img src="${info.image}" alt="">
    <h2><a href="${info.link}">${info.name}</a></h2>
    <p>${info.description}</p>
    </div>
    `;
}

export function alertsTemplate(alert) {
    let iconId = alert.category.toLowerCase();
    if (iconId == "park closure") {
        iconId = "closure";
    }
    return `
    <li class="alert">
        <svg class="icon" focusable="false" aria-hidden="true"><use xlink:href="${spritePath}#alert-${iconId}"></use></svg>
        <div>
            <h3 class="alert-${iconId}">${alert.title}</h3>
            <p>${alert.description}</p>
        </div>
    </li>
    `;
}

export function visitorCenterTemplate(center) {
    return `
    <li class="visitor-center">
        <div>
            <h3><a href="visitor-center.html?id=${center.id}">${center.name}</a></h3>
            <p>${center.description}</p>
            <p>${center.directionsInfo}</p>
    </li>`;
}

export function activityTemplate(activity) {
    return `
    <li class="activity">
        <p>${activity.name}</p>
    `;
}

function getMailingAddress(addresses) {
    const mailing = addresses.find((address) => address.type === "Mailing");
    return mailing;
  }

function getVoicePhone(phoneNumbers) {
    const phoneNumber = phoneNumbers.find((phoneNumber) => phoneNumber.type === "Voice");
    return phoneNumber.phoneNumber;
}

export function footerTemplate(data) {
    
    const mailing = getMailingAddress(data.addresses);
    const voice = getVoicePhone(data.contacts.phoneNumbers);

    return `<section class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <div><p>${mailing.line1}<p>
    <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
    <h4>Phone:</h4>
    <p>${voice}</p>
    </section>`;
  }

export function vcInfoTemplate(data) {
    const image = data.images[0];
    return `
    <figure>
        <img src="${image.url}" alt="${image.altText}" />
        <figcaption>
        ${image.caption} <span>${image.credit}</span>
        </figcaption>
    </figure>
    <p>${data.description}</p> 
    `;
}

export function addressTemplate(data) {
    return `<section class="vc-addresses__physical">
        <h3>Physical Address</h3>
        <address>
            [Address part 1]<br />
            [park name], [state] [zip]
        </address>
        </section>
        <section class="vc-addresses__mailing">
        <h3>Mailing Address</h3>
        <address>
            [Address part 1]<br />
            [park name], [state] [zip]
        </address>
    </section>`;
}

export function listTemplate(data, contentTemplate) {
    const html = data.map(contentTemplate);
    return `<ul>${html.join("")}</ul>`;
}

export function vcImageTemplate(data) {
    return `<li><img src=${data.url}" alt="${data.altText}"></li>`;
}

export function vcAmenityTemplate(data) {
    return `<li>${data}</li>`;
}