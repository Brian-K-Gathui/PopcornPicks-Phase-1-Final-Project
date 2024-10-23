# PopcornPicks 🍿
**"Butter Up Your Film Choices"**

## Table of Contents
- [Author](#author)
- [Project Description](#project-description)
- [Key Features](#key-features)
- [Live Demo](#live-demo)
- [Installation & Setup](#installation--setup)
  - [Local Setup](#local-setup)
  - [API Key Setup](#api-key-setup-if-applicable)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Challenges Faced](#challenges-faced)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Author
**Brian Gathui**

- [GitHub](https://github.com/Brian-K-Gathui)
- [LinkedIn](https://www.linkedin.com/in/briangathui/)
- [Portfolio](https://briangathui.dev)

## Project Description
PopcornPicks is a dynamic single-page web application that empowers users to discover and explore a curated selection of popular movies. Leveraging real-time data from the [OMDB API](http://www.omdbapi.com/), PopcornPicks offers an engaging and interactive user experience with features such as:

- **Browse Trending Movies**: Explore a list of currently trending movies complete with poster images, titles, and ratings.
- **Dynamic Search**: Instantly find specific films using the responsive search bar that updates results in real-time.
- **Advanced Filtering & Sorting**: Refine your movie list by genre and sort results by popularity or release date.
- **Detailed Movie Information**: Access comprehensive details for each movie, including synopsis, cast, director, and release date.
- **Responsive Design**: Seamlessly accessible on all devices, from smartphones to desktops.

PopcornPicks is meticulously designed to ensure optimal performance and a visually appealing interface across all platforms.

## Key Features
- **Display Recent Popular Movies Curently Released**: Automatically fetch and showcase trending movies from the OMDB API.
- **Search Functionality**: A responsive search bar that dynamically filters movies as the user types.
- **Movie Details**: Click on any movie to reveal additional information, including synopsis, cast, and release date.
- **Filter and Sort**: Users can filter movies by genre and sort them by popularity or release date.
- **Responsive Design**: Ensures the application is visually consistent and functional on all device sizes.
- **Pagination**: Navigate through multiple pages of movie listings for a streamlined browsing experience.

## Live Demo
Experience PopcornPicks live: [PopcornPicks Demo](https://brian-k-gathui.github.io/PopcornPicks-Phase-1-Final-Project/)

## Installation & Setup

### Local Setup
1. **Clone the Repository**
    ```bash
    git clone https://github.com/Brian-K-Gathui/PopcornPicks.git
    ```

2. **Navigate to the Project Directory**
    ```bash
    cd PopcornPicks-Phase-1-Final-Project
    ```

3. **Install Dependencies**
    PopcornPicks is a static application, so no dependencies are required. However, for development purposes, you can use a live server.

    - **Using VSCode Live Server Extension**:
      - Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VSCode.
      - Open the project in VSCode.
      - Right-click on `index.html` and select **"Open with Live Server"**.
      - Open your browser and navigate to `http://localhost:(Auto Selected Port)`.

### API Key Setup

PopcornPicks relies on the TMDB API to fetch movie data. Follow these steps to set up your API key:

1. **Sign Up for TMDB**:
   - Go to [TMDB's API page](https://www.themoviedb.org/documentation/api).
   - Click **Sign Up** in the top-right corner if you don’t have an account, and complete the registration process.
   - Verify your account via the email sent to your registered email address.
   - After verifying, log in to your TMDB account.

2. **Generate a TMDB API Key**:
   - Once logged in, hover over the **More** tab in the top-right corner of the website.
   - Select **API**, which will take you to the **API Documentation** page.
   - In the **Getting Started** section, follow the instructions to register for an API key. 
   - Please note that this process is optimized for desktop computers, so use a desktop browser to complete the registration.
   - After agreeing to the **Terms of Use**, you will be issued an API key. This can be found in your **API** section under your account settings.

3. **Configure the API Key**:
   - Open the `script.js` file located in the root directory of your project.
   - Locate the line containing `const API_KEY = 'your_api_key';`.
   - Replace `'your_api_key'` with your actual TMDB API key:

     ```javascript
     const API_KEY = 'api_key= your_api_key_is_placed_here';
     const BASE_URL = 'https://api.themoviedb.org/3';
     const API_URL_MOVIES = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
     const IMG_URL = 'https://image.tmdb.org/t/p/w500';
     const searchURL_MOVIES = BASE_URL + '/search/movie?' + API_KEY;
     ```

4. **Important Notes**:
   - TMDB is completely free to use, and only requires users to create an account, verify it, and log in.
   - The **API registration** process works best on a desktop device. Be sure to use a desktop browser when signing up.
   - Familiarize yourself with TMDB’s **rate limits** and **authentication** if you plan to build more complex applications. You can read about rate limiting and other API configurations in the TMDB API documentation.

> **Security Note**: Never expose your API key publicly. For production environments, consider using environment variables or server-side proxies to secure your API key. For demo purposes I wil be showing my Key, but please remeber to replace the key with your own key for your own personal development.

## Usage

1. **Open the App**:
   - Launch the application in your preferred web browser via the live demo link or your local setup.

2. **Browse Trending Movies**:
   - Explore the list of trending movies displayed on the home page, complete with posters, titles, and ratings.

3. **Search for Movies**:
   - Use the search bar at the top to find specific movies. Results update in real-time as you type.

4. **View Movie Details**:
   - Click on any movie card to open a modal with detailed information, including synopsis, cast, director, and release date.

5. **Filter and Sort Movies**:
   - Utilize the filter dropdown to select genres.
   - Use the sort options to order movies by popularity or release date.

6. **Navigate Pages**:
   - Use the pagination controls at the bottom to browse through multiple pages of movie listings.

## Technologies Used
- **HTML5**: Structuring the web content.
- **CSS3 & SCSS**: Styling and responsive layout.
- **JavaScript (ES6+)**: Handling interactivity and API communication.
- **TMDB API**: Fetching real-time movie data.
- **Webpack** *(New)*: Module bundling and asset management.
- **Font Awesome**: Iconography for UI elements.
- **Git & GitHub**: Version control and repository hosting.

## Challenges Faced

### Asynchronous API Handling
Ensuring efficient data fetching from the TMDB API without degrading user experience was challenging. This was addressed by utilizing JavaScript's `fetch()` method alongside `async`/`await` to manage asynchronous requests effectively.

### Initial Data Display
One of the early challenges was ensuring that the initial set of popular movies displayed correctly when the app first loaded. Fetching the data from the TMDB API and mapping it to the HTML elements required careful handling to avoid race conditions and errors during page load. Using `async`/`await` helped manage the API calls, and ensuring proper DOM rendering with JavaScript's event loop was essential for a smooth initial experience.

### Dynamic Search and Filtering
Implementing a real-time search and filtering system that seamlessly interacts with all movie data required meticulous handling using JavaScript array methods like `filter()` and `map()`. Optimizing performance to handle large datasets was also a key consideration.

### Event Listeners for User Interactions
Handling multiple user interactions through event listeners was another challenge. Implementing click events for movie details, input events for search functionality, and change events for filtering and sorting required efficient event delegation. Ensuring that these listeners responded quickly and updated the DOM without introducing performance bottlenecks was crucial for maintaining a seamless user experience.

### Responsive Design
Adapting the application to function flawlessly across various screen sizes involved extensive CSS tweaking and testing on multiple devices. Implementing a mobile-first approach helped streamline this process, ensuring that both mobile and desktop users had an optimal experience.


## Future Improvements

- **User Authentication**: Implement user accounts to allow personalized experiences and cloud-based favorites.
- **Enhanced Filtering**: Add more filtering options such as release year, language, and ratings.
- **Recommendations Engine**: Suggest movies based on user preferences and viewing history.
- **Light and Dark Theme**: Provide users with the ability to toggle between light and dark themes for a more personalized and comfortable viewing experience.
- **Favorites Section**: Introduce a "Favorites" or "Watch List" feature where users can save their favorite movies for later viewing. This will be saved either in the browser's local storage or linked to user accounts if authentication is implemented.
- **Intro Splash Screen**: Add a visually appealing intro splash screen that plays when the app loads, featuring a cool animation or branding before transitioning into the main interface.
- **Overall Application Polish**: Focus on refining the app's UI/UX, ensuring smoother animations, optimized layouts, and polished components to enhance user engagement and satisfaction.
- **Localization**: Support multiple languages to cater to a global audience.
- **Performance Optimization**: Further optimize load times and reduce API call redundancies by caching frequently accessed data or images.


## Contributing
Contributions are welcome! Whether it's reporting issues, suggesting features, or submitting pull requests, your support helps make PopcornPicks better.

1. **Fork the Repository**
2. **Create a Feature Branch**
    ```bash
    git checkout -b feature/YourFeatureName
    ```
3. **Commit Your Changes**
    ```bash
    git commit -m "Add some feature"
    ```
4. **Push to the Branch**
    ```bash
    git push origin feature/YourFeatureName
    ```
5. **Open a Pull Request**

---

© 2024 Brian Gathui. All rights reserved.
