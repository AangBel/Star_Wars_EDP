// const ten = new URLSearchParams(window.location.search);
// const id = ten.get('id'); YYY
let nameH1;
let id;
let climate;
let charactersfromDiv;
// let name;
// let diameter;
// let rotation_period;
let terrain;
// let gravity;
// let orbital_period;
let population;
let characters;
const baseUrl = `http://localhost:9001/api`;

console.log(id);
//Page load then this below
addEventListener('DOMContentLoaded', () => {
    nameH1 = document.querySelector('h1#name');
    terrain = document.querySelector('span#terrain');
    population = document.querySelector('span#population');
    climate = document.querySelector('span#climate');
    //moving to characters section
    characters = document.querySelector('span#characters');
   const sp = new URLSearchParams(window.location.search)
   const id = sp.get('id')
   getPlanet(id)
})

async function getPlanet(id) {
    let planet;
    try {
       planet = await fetchPlanet(id)
       //character section
       planet.characters = await fetchCharacters(id)

    }
    catch (ex) {
        console.error(`Error reading planet ${id} DataTransfer.`, ex.message);
    }
    renderPlanet(planet);

}

async function fetchPlanet(id) {
    let planetUrl = `${baseUrl}/planets/${id}`;
    console.log(planetUrl)
    return await fetch(planetUrl)
        .then(res => res.json())
}

//fetch characters for ch. section
async function fetchCharacters(id) {
    const url = `${baseUrl}/planets/${id}/characters`;

    const charactersfrom = await fetch(url)
        .then (res => res.json())
    return charactersfrom;

}

const renderPlanet = planet => {
    document.title = `SWAPI - ${planet?.name}`;  //browser tab name
    nameH1.textContent = planet?.name;
    terrain.textContent = planet?.terrain;
    population.textContent = planet?.population;
    climate.textContent = planet?.climate;
    //added for character section
    //iterate characters adding each to the characters span

    // characters.textContent =planet?.characters;
    // console.log(characters.textContent);
    let characterUrl = `http://localhost:9001/api/planets/${id}/characters`
    characterUrl.forEach(name => {
        console.log(name)
    });
   
    console.log(characterUrl);
    characters.textContent = [];
for (let i = 0; i < characters.textContent.length; i++) {
  console.log(characters.textContent[i]);
}

    homeworldSpan.innerHTML = `<a href="/planets.html?id=${planet?.homeworld.id}">${planet?.homeworld.name}</a>`;
    const filmsLis = planet?.films?.map(film => `<li><a href="/film.html?id=${film.id}">${film.title}</li>`)
    filmsUl.innerHTML = filmsLis.join("");
  }