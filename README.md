# Phase 1 Project: PopcornPicks 🎬 "Butter Up Your Film Choices"

## Author
Brian Gathui

## Project Description
PopcornPicks is a single-page web application that allows users to explore a curated collection of popular movies. The app fetches real-time movie data from the OMDB public API and provides a seamless, interactive experience. Users can:
- Browse trending movies with poster images, titles, and ratings.
- Search for specific films using the dynamic search bar.
- Filter movies by genre and sort by popularity or release date.
- View detailed information about each movie, including synopsis, cast, director, and release date.
- Toggle between dark and light modes for enhanced viewing (stretch goal).

PopcornPicks is designed to be fully responsive, ensuring optimal performance on devices of all sizes.

## Key Features
- **Display Popular Movies**: Automatically fetch and display popular movies from the OMDB API.

- **Search Functionality**: A search bar that dynamically updates the movie list as the user types.

- **Movie Details**: Clicking on a movie reveals additional information, such as the synopsis, cast, and release date.

- **Filter and Sort**: Users can filter movies by genre and sort them by popularity or release date.

- **Responsive Design**: Ensures the application looks great on any device, from mobile phones to desktops.

- **Dark/Light Mode (Stretch Goal)**: Users can toggle between dark and light modes to suit their viewing preferences.

## Installation & Setup Instructions
### Local Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Brian-K-Gathui/PopcornPicks-Phase-1-Final-Project.git

2. **Navigate to the project directory**:
    ```bash
    cd PopcornPicks

3. **Open index.html in your browser**:
    Open the index.html file directly in your browser or run it using a live server extension (e.g., Live Server in VSCode).

### API Key Setup (If applicable)
You will need an OMDB API key to fetch movie data.  
Replace `your_api_key` in the fetch URLs within the `app.js` file with your actual OMDB API key.

> **Note**: Never expose your API key publicly. Use environment variables in production setups if needed.

### Usage
1. Open the app in your browser.
2. Browse through the list of trending movies on the home page.
3. Use the search bar to find specific movies.
4. Click on any movie to view detailed information.
5. Filter movies by genre or sort them by release date or popularity.
6. (Optional) Toggle between dark and light modes using the switch (stretch goal).

### Live Demo
You can view the live site here: [PopcornPicks Demo](https://your-username.github.io/PopcornPicks/)

### Challenges Faced

#### Asynchronous API Handling
One of the challenges was ensuring that data fetched from the OMDB API was displayed efficiently on the page without affecting the user experience. This was achieved using JavaScript's `fetch()` method with `async`/`await` for better control over asynchronous requests.

#### Dynamic Search and Filtering
Implementing a real-time search and filtering mechanism that works across all movie data was a key challenge. This required careful handling of the movie data with JavaScript array methods like `filter()` and `map()`.

#### Responsive Design
Ensuring that the application adapts well across various screen sizes involved tweaking the CSS and testing the app on multiple devices to ensure a smooth user experience.

### Technologies Used
- **HTML5**: For structuring the content.
- **CSS3**: For styling and layout.
- **JavaScript (ES6)**: For interactivity and API communication.
- **OMDB API**: For fetching movie data.
