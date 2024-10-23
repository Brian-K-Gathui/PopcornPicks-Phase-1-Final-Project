const API_KEY = 'api_key=your_tmdb_api_key';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

async function getMovies(url) {
    showLoading();
    const res = await fetch(url);
    const data = await res.json();
    hideLoading();
    showMovies(data.results);
}

function showMovies(data) {
    const main = document.getElementById('main');
    main.innerHTML = '';

    data.forEach(movie => {
        const { title, poster_path } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <img src="${IMG_URL + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
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
