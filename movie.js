// // https://www.omdbapi.com/?i=tt3896198&apikey=e3f88c5c

// // api 2 https://www.omdbapi.com/?i=tt3896198&apikey=b156cbc

const imdbID = localStorage.getItem("imdbID")
const movieInfoEl = document.querySelector(".movie__container")

async function main(imdbID) {
  const results = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=b156cbc`)
  const movieInfo = await results.json();
  console.log(movieInfo);
  movieInfoEl.innerHTML = movieInfo.map(movieInfo => movieInfoHTML(movieInfo)).join("");
}

main();

function movieInfoHTML(movieInfo) {
    return `<div class="movie__container">
    <div class="movie__info--left">
      <figure class="movie--figure">
        <img
          src="${movieInfo.Poster}"
          alt=""
          class="movie--img"
        />
      </figure>
    </div>
    <div class="movie__info--right">
      <h1 class="film movie__info--title">
        <span class="blue">TITLE:</span> ${movieInfo.Title}
      </h1>
      <h2 class="film movie__release--date">
        <span class="blue">RELEASE:</span>${movieInfo.Released}
      </h2>
      <h2 class="film movie__rated">
        <span class="blue">RATING:</span> ${movieInfo.Rated}
      </h2>
      <h2 class="film movie__runtime">
        <span class="blue">RUNTIME:</span> ${movieInfo.Runtime}
      </h2>
      <h2 class="film movie__genre">
        <span class="blue">GENRES:</span> ${movieInfo.Genre}
      </h2>
      <h2 class="film movie__actors">
        <span class="blue">ACTORS:</span> ${movieInfo.Actors}
      </h2>
      <h2 class="film movie__synopsis">
        <span class="blue">SYNOPSIS:</span> ${movieInfo.Plot}
      </h2>
      <h2 class="film movie__awards">
        <span class="blue">AWARDS:</span> ${movieInfo.Awards}
      </h2>
    </div>
  </div>
</div>`
}