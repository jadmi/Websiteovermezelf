const naamURL = "https://fdnd.directus.app/items/person/300";
const naamEndpoint = "/person/300";
const nameElement = document.querySelectorAll(".text p:first-of-type");
const hobbyElement = document.querySelectorAll(".text2 p:first-of-type");

const base = "https://fdnd.directus.app/items";
let endpoint =
  "/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526&sort=name&filter[fav_game][_nempty]";
let url = base + endpoint;

let lijst = document.querySelector(".games");

const progressBar = document.querySelector("progress");

const lightMode = document.querySelector;
const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

let progress = 0;

const updateProgress = () => {
  if (progress < 100) {
    // progress += 0.37;
    progress += 100;
    progressBar.value = progress;
    requestAnimationFrame(updateProgress);
  }
};

fetchNaam(naamURL).then(function (response) {
  console.log(response.data);
  nameElement.forEach((element) => {
    element.innerHTML = `
      ${response.data.name.split(" ")[0] + " -"}
    `;
  });
});

async function fetchNaam(naamURL) {
  return await fetch(naamURL)
    .then((response) => response.json())
    .catch((error) => error);
}

async function haalMinorMensenop() {
  let response = await fetch(url);
  let responseJSON = await response.json();

  let deMensenIndeMinor = responseJSON.data;

  deMensenIndeMinor.forEach((minorMens) => {
    let voornaam = minorMens.name.split(" ")[0];

    console.log(voornaam);

    let minorMensHTML = ` <li>
        <p>${voornaam} - ${minorMens.fav_game} </p>
      </li> `;
    console.log(minorMens.fav_game);
    lijst.insertAdjacentHTML("beforeend", minorMensHTML);
    console.log(lijst.styles);
  });
}

fetchNaam();

requestAnimationFrame(updateProgress);

haalMinorMensenop();
