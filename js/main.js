const naamURL = "https://fdnd.directus.app/items/person/300";
// const nameElement = document.querySelector(".wave");

let base = "https://fdnd.directus.app/items";
let endpoint =
  "/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526&sort=name&filter[fav_game][_nempty]";
let url = base + endpoint;

let lijst = document.querySelector(".games");

const progressBar = document.querySelector("progress");

const lightMode = document.querySelector;
const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

const leerdoelButton = document.querySelector(".instructieGrid");
const leerdoelList = document.querySelector("#leerdoelTargets");

const canvas = document.querySelector(".canvas");
const ulListItems = document.querySelectorAll("#leerdoelen li");

leerdoelButton.addEventListener(
  "click",
  () => {
    ulListItems.forEach((item) => {
      // stukje AI in de functie, kwam zelf niet uit op position absolute
      // Prompt: "How to keep the list items within the boundary of the container?"
      item.style.position = "absolute";

      const randomTop = Math.random() * 80;
      const randomLeft = Math.random() * 80;

      item.style.top = randomTop + "%";
      item.style.left = randomLeft + "%";
    });

    leerdoelList.classList.add("leerdoelAnimation");

    // stukje AI in de functie, kwam zelf met setTimeout maar dat werkte dus niet, AI raadde setinterval aan. Prompt: "How to make the function run infinitely?"
    setInterval(() => {
      ulListItems.forEach((item) => {
        item.style.position = "absolute";

        const randomTop = Math.random() * 80;
        const randomLeft = Math.random() * 80;

        item.style.top = randomTop + "%";
        item.style.left = randomLeft + "%";
      });
    }, 2000);
  },

  // https://www.educative.io/answers/how-to-ensure-an-event-listener-is-only-fired-once-in-javascript
  { once: true },
);

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

// fetchNaam(naamURL).then(function (response) {
//   console.log(response.data);
//   nameElement.innerHTML = `
//     ${response.data.name}
//   `;
// });

// async function fetchNaam(url) {
//   return await fetch(url)
//     .then((response) => response.json())
//     .catch((error) => error);
// }

// fetchNaam();

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
        <p>${voornaam} - ${minorMens.fav_game} </p>
      </li> `;
    console.log(minorMens.fav_game);
    lijst.insertAdjacentHTML("beforeend", minorMensHTML);
  });
}
