const apiURL = "https://fdnd.directus.app/items/person/300";
const nameElement = document.querySelector("h1");

const progressBar = document.querySelector("progress");

const lightMode = document.querySelector;
const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (isDarkMode) {
}

fetchJson(apiURL).then(function (response) {
  console.log(response.data);
  nameElement.innerHTML = `
    ${response.data.name}
  `;
});

async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error);
}

let progress = 0;

const updateProgress = () => {
  if (progress < 100) {
    // progress += 0.37;
    progress += 100;
    progressBar.value = progress;
    requestAnimationFrame(updateProgress);
  }
};

requestAnimationFrame(updateProgress);
