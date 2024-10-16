# Phase 1 Project: Single Page Application (SPA)

## Learning Goals

- Design and architect features across a frontend
- Communicate and collaborate in a technical environment
- Integrate JavaScript and an external API
- Debug issues in small- to medium-sized projects
- Build and iterate on a project MVP

## Overview

For this phase 1 project, you're going to build a Single Page Application (SPA). This project is designed to challenge you to integrate everything you've learned so far. The frontend will be built using HTML, CSS, and JavaScript, and it will communicate with a public API.

## Project Requirements

To meet the project requirements, the app must:

- Be built with an HTML/CSS/JS frontend that accesses data from a public API or from a `db.json` file using `json-server`.
- The API or `db.json` file must return a collection of at least 5 objects, with each object having at least 3 attributes.
- All interactions between the client and the API should be handled asynchronously using JSON as the communication format.
- The entire app must run on a single page (NO redirects).
- Include at least 3 distinct event listeners that enable interactivity.
- Implement at least one instance of array iteration using array methods like `map`, `forEach`, or `filter`.
- Follow good coding practices, utilizing functions to keep the code DRY (Do not Repeat Yourself).

## Setup Instructions

To get started with the project, follow these steps:

1. Clone the repository from GitHub.
2. Run `npm install` to install any dependencies.
3. If using `json-server`, create a `db.json` file in the root of your project with your data.
4. Run the backend with `json-server --watch db.json`.
5. Use `live-server` or any other local server to serve the frontend and test the application.
6. Write your JavaScript code in the `index.js` file to interact with the API and the DOM.

## JSON Server Instructions

If you're using `json-server`, you can create a `db.json` file that might look like this:

```json
{
  "toys": [
    {
      "id": 1,
      "name": "Woody",
      "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
      "likes": 8
    },
    {
      "id": 2,
      "name": "Buzz Lightyear",
      "image": "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png",
      "likes": 14
    }
  ]
}
