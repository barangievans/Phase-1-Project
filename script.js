const weatherForm = document.getElementById('weatherForm');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');

const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

weatherForm.addEventListener('submit', async function(event) {
  event.preventDefault();
  const city = cityInput.value.trim();

  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeather(weatherData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      displayError('Failed to fetch weather data. Please try again.');
    }
  } else {
    displayError('Please enter a city name.');
  }
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch weather data for ${city}`);
  }
  const data = await response.json();
  return data;
}

function displayWeather(data) {
  const temperature = data.main.temp;
  const description = data.weather[0].description;
  weatherInfo.innerHTML = `
    <h2>Weather in ${data.name}</h2>
    <p>Temperature: ${temperature} &deg;C</p>
    <p>Description: ${description}</p>
  `;
}

function displayError(message) {
  weatherInfo.innerHTML = `<p>${message}</p>`;
}
