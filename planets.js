// const ten = new URLSearchParams(window.location.search);
// const id = ten.get('id'); YYY
let nameH1;
let id;
let climate;
let surface_water;
let name;
let diameter;
let rotation_period;
let terrain;
let gravity;
let orbital_period;
let population;
const baseUrl = `http://localhost:9001/api`;

console.log(id);
//Page load then this below
addEventListener('DOMContentLoaded', () => {
    nameH1 = document.querySelector('h1#name');
    terrain = document.querySelector('span#terrain');
    population = document.querySelector('span#population');
    climate = document.querySelector('span#climate')
    console.log(nameH1,"this is name h1")
   // planetid = document.querySelector('h1#planet');
   const sp = new URLSearchParams(window.location.search)
   const id = sp.get('id')
   getPlanet(id)
})

async function getPlanet(id) {
    let planet;
    try {
        planet = await fetchPlanet(id)

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


const renderPlanet = planet => {
    document.title = `SWAPI - ${planet?.name}`;  // Just to make the browser tab say their name
    nameH1.textContent = planet?.name;
    terrain.textContent = planet?.terrain;
    population.textContent = planet?.population;
    climate.textContent = planet?.climate;
    homeworldSpan.innerHTML = `<a href="/planets.html?id=${planet?.homeworld.id}">${planet?.homeworld.name}</a>`;
    const filmsLis = planet?.films?.map(film => `<li><a href="/film.html?id=${film.id}">${film.title}</li>`)
    filmsUl.innerHTML = filmsLis.join("");
  }