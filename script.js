const API_KEY = 'api_key=b8d03025eb5b9f5d50828a3e42ce6342';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL_MOVIES = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL_MOVIES = BASE_URL + '/search/movie?' + API_KEY;

const genres = [
    { "id": 28, "name": "Action" },
    { "id": 12, "name": "Adventure" },
    { "id": 16, "name": "Animation" },
    { "id": 35, "name": "Comedy" },
    { "id": 80, "name": "Crime" },
    { "id": 99, "name": "Documentary" },
    { "id": 18, "name": "Drama" },
    { "id": 10751, "name": "Family" },
    { "id": 14, "name": "Fantasy" },
    { "id": 36, "name": "History" },
    { "id": 27, "name": "Horror" },
    { "id": 10402, "name": "Music" },
    { "id": 9648, "name": "Mystery" },
    { "id": 10749, "name": "Romance" },
    { "id": 878, "name": "Science Fiction" },
    { "id": 10770, "name": "TV Movie" },
    { "id": 53, "name": "Thriller" },
    { "id": 10752, "name": "War" },
    { "id": 37, "name": "Western" }
];

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const tagsEl = document.getElementById('tags');

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const current = document.getElementById('current');

var currentPage = 1;
var nextPage = 2;
var prevPage = 3;
var lastUrl = '';
var totalPages = 100;

var selectedGenre = [];
setGenre();

function setGenre() {
    tagsEl.innerHTML = '';
    genres.forEach(genre => {
        const t = document.createElement('div');
        t.classList.add('tag');
        t.id = genre.id;
        t.innerText = genre.name;
        t.addEventListener('click', () => {
            if (selectedGenre.length == 0) {
                selectedGenre.push(genre.id);
            } else {
                if (selectedGenre.includes(genre.id)) {
                    selectedGenre.forEach((id, idx) => {
                        if (id == genre.id) {
                            selectedGenre.splice(idx, 1);
                        }
                    });
                } else {
                    selectedGenre.push(genre.id);
                }
            }
            const sortedUrl = getApiUrl() + '&with_genres=' + encodeURI(selectedGenre.join(',')) + '&sort_by=vote_average.desc';
            getMovies(sortedUrl);
            highlightSelection();
        });
        tagsEl.append(t);
    });
}

function highlightSelection() {
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.classList.remove('highlight');
    });
    clearBtn();
    if (selectedGenre.length != 0) {
        selectedGenre.forEach(id => {
            const highlightedTag = document.getElementById(id);
            highlightedTag.classList.add('highlight');
        });
    }
}

function clearBtn() {
    let clearBtn = document.getElementById('clear');
    if (clearBtn) {
        clearBtn.classList.add('highlight');
    } else {
        let clear = document.createElement('div');
        clear.classList.add('tag', 'highlight');
        clear.id = 'clear';
        clear.innerText = 'Clear x';
        clear.addEventListener('click', () => {
            selectedGenre = [];
            setGenre();
            getMovies(getApiUrl());
        });
        tagsEl.append(clear);
    }
}

getMovies(getApiUrl());

function getApiUrl() {
    return API_URL_MOVIES;
}

function getMovies(url) {
    lastUrl = url;
    fetch(url).then(res => res.json()).then(data => {
        if (data.results.length !== 0) {
            const sortedData = data.results.sort((a, b) => {
                const scoreA = (a.popularity * 0.5) + (a.vote_average * 2) + (a.vote_count * 0.1);
                const scoreB = (b.popularity * 0.5) + (b.vote_average * 2) + (b.vote_count * 0.1);
                
                return scoreB - scoreA;
            });

            showMovies(sortedData);
            currentPage = data.page;
            nextPage = currentPage + 1;
            prevPage = currentPage - 1;
            totalPages = data.total_pages;

            current.innerText = currentPage;

            if (currentPage <= 1) {
                prev.classList.add('disabled');
                next.classList.remove('disabled');
            } else if (currentPage >= totalPages) {
                prev.classList.remove('disabled');
                next.classList.add('disabled');
            } else {
                prev.classList.remove('disabled');
                next.classList.remove('disabled');
            }

            tagsEl.scrollIntoView({ behavior: 'smooth' });
        } else {
            main.innerHTML = `<h1 class="no-results"> No Results Found</h1>`;
        }
    });
}


function showMovies(data) {
    main.innerHTML = '';

    data.forEach(item => {
        const { name, title, poster_path, vote_average, overview, release_date, genre_ids } = item;
        const displayTitle = title || name;

        const truncatedOverview = overview.length > 250 ? overview.substring(0, 250) + "..." : overview;

        const releaseDate = release_date || 'N/A';
        const genreNames = genre_ids && genre_ids.length > 0
            ? genre_ids.map(id => genres.find(genre => genre.id === id)?.name).join(', ')
            : 'N/A';

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = 
            `<img src="${poster_path ? IMG_URL + poster_path : "images/placeholder.png"}" alt="${displayTitle}">
            <div class="movie-info">
                <h3>${displayTitle}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <p><strong>Overview</strong></p>
                ${truncatedOverview}
                <p><strong>Release Date</strong></p>
                ${releaseDate}
                <p><strong>Genres</strong></p>
                ${genreNames}
                <button class="watch-trailer" id="${item.id}">More Details</button>
            </div>`;
        main.appendChild(movieEl);

        document.getElementById(item.id).addEventListener('click', () => {
            fetch(`${BASE_URL}/movie/${item.id}?${API_KEY}`)
                .then(res => res.json())
                .then(details => {
                    const releaseDate = details.release_date || 'N/A';
                    const genres = details.genres.length > 0
                        ? details.genres.map(genre => genre.name).join(', ')
                        : 'N/A';

                    fetch(`${BASE_URL}/movie/${item.id}/credits?${API_KEY}`)
                        .then(res => res.json())
                        .then(credits => {
                            const cast = credits.cast.length > 0
                                ? credits.cast.slice(0, 5).map(member => member.name).join(', ')
                                : 'N/A';

                            fetch(`${BASE_URL}/movie/${item.id}/videos?${API_KEY}`)
                                .then(res => res.json())
                                .then(videoData => {
                                    const officialTrailer = videoData.results.find(video =>
                                        video.type === "Trailer" && video.official
                                    );

                                    openNav({
                                        ...details,
                                        releaseDate,
                                        genres,
                                        cast,
                                        trailerKey: officialTrailer ? officialTrailer.key : null
                                    });
                                });
                        });
                });
        });
    });
}

const overlayContent = document.getElementById('overlay-content');

function openNav(item) {
    let trailerEmbed = item.trailerKey
        ? `<iframe width="560" height="315" src="https://www.youtube.com/embed/${item.trailerKey}" frameborder="0" allowfullscreen></iframe>`
        : `<p>No official trailer available</p>`;

    let content = `
        <h1>${item.original_title || item.name}</h1>
        <p><strong>Release Date:</strong> ${item.releaseDate}</p>
        <p><strong>Genres:</strong> ${item.genres}</p>
        <p><strong>Cast:</strong> ${item.cast}</p>
        <p><strong>Overview:</strong> ${item.overview}</p>
        <p><strong>Runtime:</strong> ${item.runtime ? item.runtime + ' minutes' : 'N/A'}</p>
        <p><strong>Budget:</strong> ${item.budget ? '$' + item.budget.toLocaleString() : 'N/A'}</p>
        <p><strong>Revenue:</strong> ${item.revenue ? '$' + item.revenue.toLocaleString() : 'N/A'}</p>
        <p><strong>Status:</strong> ${item.status || 'N/A'}</p>
        ${trailerEmbed}
    `;
    overlayContent.innerHTML = content;
    document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.height = "0%";  // Set height to 0%
}

function getColor(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    selectedGenre = [];
    setGenre();
    if (searchTerm) {
        getMovies(searchURL_MOVIES + '&query=' + searchTerm);
    } else {
        getMovies(getApiUrl());
    }
});

prev.addEventListener('click', () => {
    if (prevPage > 0) {
        pageCall(prevPage);
    }
});

next.addEventListener('click', () => {
    if (nextPage <= totalPages) {
        pageCall(nextPage);
    }
});

function pageCall(page) {
    let urlSplit = lastUrl.split('?');
    let queryParams = urlSplit[1].split('&');
    
    let pageParamIndex = queryParams.findIndex(param => param.startsWith('page='));
    
    if (pageParamIndex === -1) {
        queryParams.push(`page=${page}`);
    } else {
        queryParams[pageParamIndex] = `page=${page}`;
    }
    
    let newUrl = `${urlSplit[0]}?${queryParams.join('&')}`;
    getMovies(newUrl);
}
