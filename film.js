let filmsDiv;

const baseUrl = `http://localhost:9001/api`;

// Runs on page load
addEventListener('DOMContentLoaded', () => {
    nameH1 = document.querySelector('h1#name');

    filmsUl = document.querySelector('#films>ul');
    const sp = new URLSearchParams(window.location.search)
    const id = sp.get('id')
    getFilms(id)
    
  });

  

let films = [];
console.log('this is film', film)
let characters = [];
let matchingCharacters = [];
const charactersList = document.querySelector("#charactersList")

async function getFilms() {
    let url = 'http://localhost:9001/api/films';

    try {
        const fetchedFilms = await fetch(url)
          .then(res => res.json())
        films.push(...fetchedFilms);
      }
      catch (ex) {
        console.error("Error reading characters.", ex.message);
      }
      console.log("All the characters are ", films)
      renderFilms(films);
}


const renderFilms = films => {
    const divs = characters.map(character => {
      const el = document.createElement('div');
      el.addEventListener('click', () => goToCharacterPage(character.id));
      el.textContent = character.name;
      return el;
    })
    charactersList.replaceChildren(...divs)
  }
async function getCharacters() {
    let url = 'http://localhost:9001/api/characters';
  
    try {
      const fetchedCharacters = await fetch(url)
        .then(res => res.json())
      characters.push(...fetchedCharacters);
    }
    catch (ex) {
      console.error("Error reading characters.", ex.message);
    }
    console.log("All the characters are ", characters)
    renderCharacters(characters);
  }

  const renderCharacters = characters => {
    const divs = characters.map(character => {
      const el = document.createElement('div');
      el.addEventListener('click', () => goToCharacterPage(character.id));
      el.textContent = character.name;
      return el;
    })
    charactersList.replaceChildren(...divs)
  }

  const renderFilm = film => {
    document.title = `SWAPI - ${film?.id}`;
    console.log('document title', document.title);
  }