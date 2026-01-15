console.log("script.js loaded");
const isHomePage = true; // change to false for landing page

document.getElementById("marketing-hero").style.display =
    isHomePage ? "none" : "flex";

document.getElementById("movie-banner").style.display =
    isHomePage ? "block" : "none";



async function fetchMovies(url, rowId) {
    const response = await fetch(url);
    const data = await response.json();

    const row = document.getElementById(rowId);
    row.innerHTML = "";

    data.results.forEach(movie => {
        if (!movie.poster_path) return;

        const img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
        img.classList.add("poster");

        row.appendChild(img);
    });
}


// Movie data (temporary placeholders)
const movies = {
    trending: 12,
    toprated: 10,
    originals: 8,
    action: 15,
    comedy: 12,
};

// Function to create movie posters
function populateRow(rowId, count) {
    const row = document.getElementById(rowId);

    for (let i = 1; i <= count; i++) {
        const poster = document.createElement("div");
        poster.classList.add("poster");
        row.appendChild(poster);
    }
}

// Populate rows
populateRow("trending", movies.trending);
populateRow("toprated", movies.toprated);
populateRow("originals", movies.originals);
// Scroll buttons logic
const scrollAmount = 300;

// Select all row containers
const rowContainers = document.querySelectorAll(".row-container");

rowContainers.forEach(container => {
    const row = container.querySelector(".movie-row");
    const leftBtn = container.querySelector(".scroll-btn.left");
    const rightBtn = container.querySelector(".scroll-btn.right");

    rightBtn.addEventListener("click", () => {
        row.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });

    leftBtn.addEventListener("click", () => {
        row.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });
});

fetchMovies(requests.fetchTrending, "trending");
fetchMovies(requests.fetchNetflixOriginals, "originals");
fetchMovies(requests.fetchTopRated, "toprated");
fetchMovies(requests.fetchActionMovies, "action");
fetchMovies(requests.fetchComedyMovies, "comedy");


async function loadBanner() {
    console.log("loadBanner called");

const response = await fetch(requests.fetchTrending, { cache: "no-store" });
    const data = await response.json();

    console.log("Banner movies:", data.results);

    const moviesWithBackdrop = data.results.filter(
        movie => movie.backdrop_path
    );

    if (!moviesWithBackdrop.length) {
        console.error("No backdrop images found");
        return;
    }
    console.log("Movies with backdrop:", moviesWithBackdrop.length);


    const movie =
        moviesWithBackdrop[
            Math.floor(Math.random() * moviesWithBackdrop.length)
        ];



    const banner = document.querySelector(".banner");

    const imageUrl =
        `${imageBaseUrl}${movie.backdrop_path}`;

    console.log("Banner image:", imageUrl);


    banner.style.backgroundImage = `url(${imageUrl})`;

    document.getElementById("banner-title").textContent =
        movie.title || movie.name || "";

    document.getElementById("banner-description").textContent =
        movie.overview || "";
}

//loadBanner() ;
//document.querySelector(".banner").style.backgroundImage =
 // 'url("https://image.tmdb.org/t/p/original/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg")';
document.addEventListener("DOMContentLoaded", loadBanner);