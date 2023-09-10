// // https://www.omdbapi.com/?i=tt3896198&apikey=e3f88c5c

// // api 2 https://www.omdbapi.com/?i=tt3896198&apikey=b156cbc

const moviesListEl = document.querySelector(".movies__wrapper")
const search = localStorage.getItem("search")

async function renderMovies () {
    const movies = await fetch (`https://www.omdbapi.com/?i=tt3896198&apikey=b156cbc&s=${search}`);
    const movieData = await movies.json()
    console.log(movieData);
    moviesListEl.innerHTML = movieData.Search.map( movie => movieHTML(movie)).join("")
}

renderMovies();

function searchMovie (event) {
    const search = event.target.value;
    localStorage.setItem("search", search)
    renderMovies();
}

function movieHTML (movie) {
    return ` <div class="movie">
    <figure class="movie__img--wrapper">
      <img src="${movie.Poster}" alt="" class="movie__img">
    </figure>
    <div class="movie__info">
      <h1 class="movie__title">${movie.Title}</h1>
      <h1 class="movie__release">${movie.Year}</h1>
    </div>
  </div>`
}