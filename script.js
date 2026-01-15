console.log("script.js loaded");
const isHomePage = false; // change to false for landing page

const hero = document.getElementById("marketing-hero");
const banner = document.getElementById("movie-banner");

if (hero) {
    hero.style.display = "none";
}

if (banner) {
    banner.style.display = "block";
}

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

        img.addEventListener("click", () => {
    showTrailer(movie.id, movie.media_type || "movie");
});

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

async function showTrailer(movieId, mediaType = "movie") {
    console.log("showTrailer loaded");
    const response = await fetch(
        `${BASE_URL}/${mediaType}/${movieId}/videos?api_key=${API_KEY}`
    );
    const data = await response.json();

    const trailer = data.results.find(
        v => v.site === "YouTube" && v.type === "Trailer"
    );

    if (!trailer) {
        alert("Trailer not available");
        return;
    }

    const modal = document.getElementById("trailer-modal");
    const iframe = document.getElementById("trailer-frame");

    iframe.src = `https://www.youtube.com/embed/${trailer.key}?autoplay=1`;
    modal.style.display = "flex";

    document.getElementById("trailer-close").onclick = () => {
        modal.style.display = "none";
        iframe.src = "";
    };

    modal.onclick = e => {
        if (e.target === modal) {
            modal.style.display = "none";
            iframe.src = "";
        }
    };
}

async function loadBanner() {
    let bannerMovie;
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


    bannerMovie =
        moviesWithBackdrop[
            Math.floor(Math.random() * moviesWithBackdrop.length)
        ];



    const banner = document.querySelector(".banner");

    const imageUrl =
        `${imageBaseUrl}${bannerMovie.backdrop_path}`;

    console.log("Banner image:", imageUrl);


    banner.style.backgroundImage = `url(${imageUrl})`;

    document.getElementById("banner-title").textContent =
        bannerMovie.title || bannerMovie.name || "";

    document.getElementById("banner-description").textContent =
        bannerMovie.overview || "";
    
        document.querySelector(".banner-btn").onclick = () => {
    showTrailer(bannerMovie.id, "movie");
};

}
loadBanner();

document.addEventListener("DOMContentLoaded", loadBanner);

const searchInput = document.getElementById("search-input");

if (searchInput) {
  searchInput.addEventListener("keyup", async e => {
    const query = e.target.value.trim();

    if (query.length < 2) return;

    const response = await fetch(requests.search(query));
    const data = await response.json();

    const row = document.getElementById("trending");
    row.innerHTML = "";

    data.results.forEach(item => {
      if (!item.poster_path) return;

      const img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/w300${item.poster_path}`;
      img.classList.add("poster");

      row.appendChild(img);
    });
  });
}
