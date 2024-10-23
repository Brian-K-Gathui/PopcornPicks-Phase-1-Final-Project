const API_KEY = 'api_key=your_tmdb_api_key';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const genres = [
    { "id": 28, "name": "Action" },
    { "id": 12, "name": "Adventure" },
    { "id": 16, "name": "Animation" },
    // Add the remaining genres here...
];

const tagsEl = document.getElementById('tags');
let selectedGenre = [];

setGenres();

function setGenres() {
    tagsEl.innerHTML = '';
    genres.forEach(genre => {
        const tag = document.createElement('div');
        tag.classList.add('tag');
        tag.id = genre.id;
        tag.innerText = genre.name;
        tag.addEventListener('click', () => {
            if (selectedGenre.includes(genre.id)) {
                selectedGenre = selectedGenre.filter(id => id !== genre.id);
            } else {
                selectedGenre.push(genre.id);
            }
            highlightSelection();
            getMovies(`${API_URL}&with_genres=${encodeURI(selectedGenre.join(','))}`);
        });
        tagsEl.append(tag);
    });
}

function highlightSelection() {
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.classList.remove('highlight');
    });

    if (selectedGenre.length !== 0) {
        selectedGenre.forEach(id => {
            const tag = document.getElementById(id);
            tag.classList.add('highlight');
        });
    }
}

async function getMovies(url) {
    showLoading();
    const res = await fetch(url);
    const data = await res.json();
    hideLoading();
    showMovies(data.results);
}

function showMovies(data) {
    const main = document.getElementById('main');
    main.innerHTML = ''; // Clear the main section before adding new movies

    data.forEach(movie => {
        const { title, poster_path, vote_average } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img src="${IMG_URL + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="rating">${vote_average}</span>
            </div>
        `;
        main.appendChild(movieEl);
    });
}

getMovies(API_URL);


const form = document.getElementById('form');
const search = document.getElementById('search');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    console.log('Search for:', searchTerm);
});


const loading = document.getElementById('loading');

function showLoading() {
    loading.style.display = 'block';
}

function hideLoading() {
    loading.style.display = 'none';
}
