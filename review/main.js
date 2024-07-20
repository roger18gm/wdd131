import movies from "./movies.mjs";

function random(num)
{
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list)
{
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

function templateMovieInfo(movie) {
    const movieTitle = encodeURIComponent(movie.title);
    return ` 
    <div>
        <h1 class="movie-title">${movie.title}</h1>
        <img class="movie-img" src="${movie.thumbnail}" alt="image for movie">
        <h2><a class="view-movie" href="movie.html?title=${movieTitle}">Click for more info!</a></h2>
        <section class="act-gen">
            <section class="actors">
                <h2>Actors</h2>
                ${castTemplate(movie.cast)}
            </section>
            <section class="genres">
                <h2>Genres</h2>
                ${genreTemplate(movie.genres)}
            </section>
        </section>
    </div>
        `;
    }
    

function castTemplate(castMembers) {
    let html = '';

    for (let castMember of castMembers) {
        html += `<p class="movie-cast">${castMember}</p>\n`;
    }
    return html;
}
function genreTemplate(genres) {
    let html = '';

    for (let genre of genres) {
       html += `<p class="movie-genre">${genre}</p>\n`;
    }
    return html;
}

// function renderMovies(movies) {
//     const movieOutput = document.querySelector(".movie-info");
//     movieOutput.innerHTML = movies.map(templateMovieInfo).join('');
// }

function renderMovies(movies, targetElement) {
    const movieOutput = document.querySelector(targetElement);
    movieOutput.innerHTML = ""; // Clear previous content

    if (movies.length === 0) {
        movieOutput.innerHTML = `<p>No movies found for your query.</p>`;
    } else {
        movies.forEach(movie => {
            const movieHTML = templateMovieInfo(movie);
            movieOutput.insertAdjacentHTML('beforeend', movieHTML);
        });
    }
}

function initialize() {
    const randomMovie = getRandomListEntry(movies);
    renderMovies([randomMovie], ".movie-highlight");
}

const submitButton = document.querySelector("#submitButton");
const inputField = document.querySelector("#searchbar");

submitButton.addEventListener('click', searchHandler);

function searchHandler(event) {
    event.preventDefault();
    const query = inputField.value.toLowerCase();
    console.log("Search Query: ", query); // Debugging log
    const filteredMovies = filterMovies(query);
    console.log("Filtered Movies: ", filteredMovies); // Debugging log
    renderMovies(filteredMovies, ".movie-info");

    // Hide the movie-highlight section if a search is performed
    const movieHighlightSection = document.querySelector(".movie-highlight");
    if (filteredMovies.length > 0 || query !== "") {
        movieHighlightSection.classList.add("highlight-hidden");
        console.log("Hiding movie-highlight"); // Debugging log
    } else {
        movieHighlightSection.classList.remove("highlight-hidden");
        console.log("Showing movie-highlight"); // Debugging log
    }
}

function filterMovies(query) {
    return movies.filter(movie => 
        movie.title.toLowerCase().includes(query) ||
        movie.cast.some(castMember => castMember.toLowerCase().includes(query)) ||
        movie.genres.some(genre => genre.toLowerCase().includes(query)) ||
        movie.extract.toLowerCase().includes(query)
    );
}

const missionButton = document.querySelector(".mission-button");
const missionDesc = document.querySelector(".mission-desc");

function toggleMissionInfo() {
    missionDesc.classList.toggle("hidden");

}
missionButton.addEventListener("click",toggleMissionInfo);
initialize();
