const naamURL = "https://fdnd.directus.app/items/person/300";

const woonplaatsElement = document.querySelectorAll(".text p:nth-of-type(2)");
const hobbyElement = document.querySelectorAll(".text2 p:first-of-type");

const base = "https://fdnd.directus.app/items";
let endpoint =
  "/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526&sort=name&filter[fav_game][_nempty]&limit=10";
let url = base + endpoint;

let lijst = document.querySelector(".game");
let gameImage = document.querySelector(".gameImage");
let gamesUl = document.querySelector(".games");

const progressBar = document.querySelector("progress");

const lightMode = document.querySelector;
const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

let progress = 0;

const updateProgress = () => {
  if (progress < 100) {
    progress += 0.37;
    progressBar.value = progress;
    requestAnimationFrame(updateProgress);
  }
};

fetchNaam(naamURL).then(function (response) {
  console.log(response.data);
  hobbyElement.forEach((element) => {
    element.innerHTML = `
      ${response.data.fav_hobby.split(" ")[0] + " -"}
    `;
  });
  woonplaatsElement.forEach((element) => {
    element.innerHTML = `
      ${response.data.residency.split(" ")[0] + " -"}
    `;
  });
});

async function fetchNaam(naamURL) {
  return await fetch(naamURL)
    .then((response) => response.json())
    .catch((error) => error);
}

// Met deze functie haal ik de eerste 10 mensen uit de minor heb die hun favoriete game hebben ingevuld, vervolgens maak ik voor elk persoon een dynamisch li met hun eigen naam en favoriete game, samen met een handmatig ingeladen cover

async function haalMinorMensenop() {
  let response = await fetch(url);
  let responseJSON = await response.json();

  let deMensenIndeMinor = responseJSON.data;

  deMensenIndeMinor.forEach((minorMens) => {
    let voornaam = minorMens.name.split(" ")[0];

    // https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript
    let favGame = minorMens.fav_game.replace(/\s+/g, "");

    console.log(voornaam);
    console.log(favGame);

    let newLi = document.createElement("li");
    let newImg = document.createElement("img");
    let newP = document.createElement("p");

    newImg.src = `images/gameCovers/${favGame.toLowerCase()}.png`;
    newP.textContent = `${voornaam} - ${favGame}`;

    // copilot gebruikt voor de juiste methode om elementen in de ul te inserten (appendChild)
    newLi.appendChild(newImg);
    newLi.appendChild(newP);

    gamesUl.appendChild(newLi);
  });
}

fetchNaam(naamURL);

requestAnimationFrame(updateProgress);

haalMinorMensenop();
