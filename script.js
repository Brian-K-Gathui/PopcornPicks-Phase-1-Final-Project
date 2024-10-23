const form = document.getElementById('form');
const search = document.getElementById('search');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    console.log('Search for:', searchTerm);
});
