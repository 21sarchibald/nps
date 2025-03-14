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
    <li class="alert-list-item">
        <svg class="icon" focusable="false" aria-hidden="true"><use xlink:href="/images/sprite.symbol.svg#${iconId}"></use></svg>
        <div>
            <h3>${alert.title}</h3>
            <p>${alert.description}</p>
        </div>
    </li>
    `
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