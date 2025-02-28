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


function setIntro(data) {
    return `<h1 id="parkName">${data.fullName}</h1>
        <p id="parkDescription">${data.description}</p>`
}
document.querySelector(".intro").innerHTML = setIntro(parkData);

function mediaCardTemplate(info) {
    return `
    <div>
    <img src="${info.image}" alt="">
    <h2><a href="${info.link}">${info.name}</a></h2>
    <p>${info.description}</p>
    </div>
    `;
}

const parkInfoLinks = [
    {
      name: "Current Conditions &#x203A;",
      link: "conditions.html",
      image: parkData.images[2].url,
      description:
        "See what conditions to expect in the park before leaving on your trip!"
    },
    {
      name: "Fees and Passes &#x203A;",
      link: "fees.html",
      image: parkData.images[3].url,
      description: "Learn about the fees and passes that are available."
    },
    {
      name: "Visitor Centers &#x203A;",
      link: "visitor_centers.html",
      image: parkData.images[9].url,
      description: "Learn about the visitor centers in the park."
    }
  ];

const infoSection = document.querySelector(".info");
parkInfoLinks.map(section => infoSection.innerHTML += mediaCardTemplate(section));


function getMailingAddress(addresses) {
    const mailing = addresses.find((address) => address.type === "Mailing");
    return mailing;
  }

function getVoicePhone(phoneNumbers) {
    const phoneNumber = phoneNumbers.find((phoneNumber) => phoneNumber.type === "Voice");
    return phoneNumber.phoneNumber;
}

function footerTemplate(info) {
    console.log("running");
    const mailing = getMailingAddress(info.addresses);
    const voice = getVoicePhone(info.contacts.phoneNumbers)
    
    return `<section class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <div><p>${mailing.line1}<p>
    <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
    <h4>Phone:</h4>
    <p>${voice}</p>
    </section>`;
  }

document.querySelector("#park-footer").innerHTML = footerTemplate(parkData);