const apiURL = "https://fdnd.directus.app/items/person/300";
const nameElement = document.querySelector("h1");

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
