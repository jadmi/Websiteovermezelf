// const apiURL = "https://fdnd.directus.app/items/person/300";
// const nameElement = document.querySelector("h1");

let base = "https://fdnd.directus.app/items";
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

if (isDarkMode) {
}

// fetchJson(apiURL).then(function (response) {
//   console.log(response.data);
//   nameElement.innerHTML = `
//     ${response.data.name}
//   `;
// });

// async function fetchJson(url) {
//   return await fetch(url)
//     .then((response) => response.json())
//     .catch((error) => error);
// }

requestAnimationFrame(updateProgress);

haalMinorMensenop();

async function haalMinorMensenop() {
  let response = await fetch(url);
  let responseJSON = await response.json();

  let deMensenIndeMinor = responseJSON.data;

  deMensenIndeMinor.forEach((minorMens) => {
    let voornaam = minorMens.name.split(" ")[0];

    console.log(voornaam);

    let minorMensHTML = ` <li>
        <h3>${voornaam} - ${minorMens.fav_game} </h3>
        <p>${minorMens.fav_game}</p>
      </li> `;
    console.log(minorMens.fav_game);
    lijst.insertAdjacentHTML("beforeend", minorMensHTML);
    lijst.ul;
  });
}
