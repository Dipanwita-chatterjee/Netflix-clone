# Netflix Clone 🎬

A Netflix-inspired frontend web application that replicates the core UI and browsing experience of Netflix.  
Built using **HTML, CSS, and JavaScript**, with real movie data fetched dynamically from the **TMDB API** and Firebase for authentication.

This project focuses on frontend architecture, API integration, and responsive UI design.

---

## 🚀 Features

- Engaging hero with welcome text and email signup prompt.
- Browse page with dynamic banner showing random movies
- Multiple movie rows (Trending, Top Rated, Originals, Action, Comedy)
- Horizontal scrolling movie rows
- Real-time movie data fetched from TMDB API
- Trailer popup when clicking on a movie poster or banner play button
- Clean UI inspired by Netflix
- Responsive layout for different screen sizes
- Login via Google (Firebase OAuth) or Email/Password.
- Auto-creates new users if they don’t exist (Netflix-style flow).

---

## 🛠️ Tech Stack

- **HTML5** – Structure
- **CSS3** – Styling & layout
- **JavaScript (ES6)** – Logic & API handling
- **TMDB API** – Movie & TV show data

---

## 📂 Project Structure
```
netflix-clone/
├── index.html
├── browse.html
├── login.html
├── style.css
├── script.js
├── requests.js
├── auth.js
├── assets/
│ └── images/
│ └── hero-collage.jpg
└── README.md
```
---

## ⚙️ How It Works

- This Netflix Clone is a front-end web application that mimics the browsing experience of Netflix.

- The Landing Page shows a hero section with welcome text and an email prompt.

- After logging in (Google or Email/Password via Firebase), users are redirected to the Browse Page, which displays a dynamic banner and horizontal rows of movies.

- The Banner Section randomly highlights a trending movie, showing its title, description, and “Play / More Info” buttons.

- Clicking “More Info” on a movie or banner opens a modal with the movie’s trailer (if available) and detailed info.

- users can search for preferred movies using the search box.

- Horizontal scrolling buttons let users navigate through each movie row.

> The project is interactive, responsive, and simulates a real streaming service interface using live data from TMDB.
---

## 🔑 API Used

**TMDB API**

- Fetches trending movies, top rated, Netflix Originals, and genre-specific movies.

- Provides movie posters, backdrops, and trailers for the banner and rows.

**Firebase Authentication**

- Handles Google OAuth login and Email/Password login.

- Auto-creates new users for a seamless “Netflix-style” experience.

> Note: This project is for educational purposes only and is not affiliated with Netflix.

---


## 👥 Collaboration

This project is being developed collaboratively using **GitHub**.

---

## 📌 Future Improvements

- Movie detail modal on poster click
- Improved mobile responsiveness
- Hover effects with movie titles

---

## 📄 Disclaimer

This is a **UI clone for learning and educational purposes**.  
All movie data and images are provided by TMDB.

---

