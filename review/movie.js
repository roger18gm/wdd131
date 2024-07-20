import movies from "./movies.mjs";

function getMovieByTitle(title) {
    return movies.find(movie => movie.title.toLowerCase() === title.toLowerCase());
}

function templateMovieDetail(movie) {
    return`
    <div id="subpage-movie">
        <h1 class="subpage-title">${movie.title}</h1>
        <img class="subpage-img" src="${movie.thumbnail}" alt="image for movie">
        <h2 class="subpage-year">Release Year: ${movie.year}</h2>
        <p class="subpage-desc">${movie.extract}</p>
        <section class="subpage-act-gen">
            <section class="subpage-actors">
                <h2>Actors</h2>
                ${castTemplate(movie.cast)}
            </section>
            <section class="subpage-genres">
                <h2>Genres</h2>
                ${genreTemplate(movie.genres)}
            </section>
        </section>
        </div>
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

function initialize() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieTitle = urlParams.get('title');
    if (movieTitle) {
        const movie = getMovieByTitle(movieTitle);
        if (movie) {
            const movieOutput = document.querySelector(".subpage-info");
            movieOutput.innerHTML = templateMovieDetail(movie);
        }   else {
            console.error("Movie not found in array");
        } 
    } else {
        console.error("No movie title provided");
    }

}

const commentButton = document.querySelector("#commentButton");

function addComment(event) {
    event.preventDefault();
    const commentInputField = document.querySelector("#comment");
    const commentInput = commentInputField.value.trim();

    if (commentInput) {

        const commentSection = document.querySelector(".comments");
        commentSection.insertAdjacentHTML("beforeend", commentTemplate(commentInput));
        commentInputField.value = "";
    }

}

function commentTemplate(commentInput) {
    return `
    <h2 class="comment-box">> ${commentInput}<h2>
    `;
}
commentButton.addEventListener("click", addComment);
initialize();