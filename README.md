# Phase-1-Project
Certainly! Let's tailor the README to fit the phase 1 project requirements for building a Single Page Application (SPA) that integrates with a public API using HTML, CSS, and JavaScript.

Weather SPA README
Welcome to the Weather SPA project! This Single Page Application (SPA) demonstrates integrating JavaScript with a public API (OpenWeatherMap) to fetch and display weather information based on user input.

Project Overview
This project challenges your understanding of frontend development by incorporating HTML, CSS, and JavaScript to create a dynamic and responsive application that communicates with an external API.

Learning Goals
Integrate JavaScript to fetch data from a public API (OpenWeatherMap).
Implement error handling and dynamic updates in a small to medium-sized project.
Debug issues related to API requests and data manipulation within the application.
Technologies Used
HTML5: For the structure and content of the application.
CSS3: For styling and responsive design.
JavaScript (ES6+): For application logic, fetching data from OpenWeatherMap API, and manipulating the DOM.
OpenWeatherMap API: To retrieve current weather data based on user-provided city names.
Features
User Input: Enter a city name to fetch weather data.
API Integration: Utilizes the OpenWeatherMap API to fetch real-time weather information.
Dynamic Updates: Updates the UI dynamically with fetched weather details.
Error Handling: Displays appropriate messages for errors such as invalid city names or failed API requests.
Setup Instructions
To run this application locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/weather-spa.git
API Key Setup:

Sign up for a free API key from OpenWeatherMap.

Replace 'YOUR_API_KEY' in script.js with your actual API key:

javascript
Copy code
const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
Open index.html:

Open index.html in your web browser to view the Weather SPA.
Enter a city name and click the "Get Weather" button to see weather information for the entered city.
JavaScript Code Explanation
The core functionality of the Weather SPA is implemented in script.js. Here's an overview of the main functions:

Event Listener: Listens for form submissions (submit event) and fetches weather data based on the entered city name.

Fetching Data: Uses fetch to retrieve weather data from the OpenWeatherMap API. Constructs the API URL dynamically with the entered city name and API key.

Error Handling: Displays error messages if the API request fails or if the user enters an invalid city name.

Displaying Data: Updates the HTML dynamically with the fetched weather information (temperature and description).