// ======== OpenWeatherMap Setup ========
const apiKey = "6b64b5d827f5afe9bb347cd356f29646"; // Replace with your OpenWeatherMap API key
const searchInput = document.querySelector(".search-section input");
const searchButton = document.querySelector(".search-section button");
const forecastGrid = document.getElementById("forecast-grid");


const cityNameElement = document.querySelector(".current-weather h2");
const conditionElement = document.querySelector(".current-weather .condition");
const tempElement = document.querySelector(".current-weather .temperature");
const iconElement = document.querySelector(".current-weather .weather-icon i");

// Stats cards
const humidityElement = document.querySelector(".stats .card:nth-child(1) h3");
const windElement = document.querySelector(".stats .card:nth-child(2) h3");
const feelsElement = document.querySelector(".stats .card:nth-child(3) h3");
const visibilityElement = document.querySelector(".stats .card:nth-child(4) h3");

// Forecast cards
const forecastCards = document.querySelectorAll(".forecast-grid .forecast-card");

// ======== Background Setter ========
function setBackground(weather) {
    const body = document.body;
    let bgImage = "/Users/chamikara/Desktop/Weather-Dashboard/images/sunny.jpg"; // default

    weather = weather.toLowerCase();
    if (weather.includes("cloud")) bgImage = "/Users/chamikara/Desktop/Weather-Dashboard/images/cloudy.jpg";
    else if (weather.includes("rain") || weather.includes("drizzle")) bgImage = "/Users/chamikara/Desktop/Weather-Dashboard/images/rainy.jpg";
    else if (weather.includes("snow")) bgImage = "/Users/chamikara/Desktop/Weather-Dashboard/images/snow.jpg";
    else if (weather.includes("fog") || weather.includes("mist")| weather.includes("haze")) bgImage = "/Users/chamikara/Desktop/Weather-Dashboard/images/fog.jpg";

    body.style.transition = "background 1.5s ease-in-out";
    body.style.background = `url('${bgImage}') no-repeat center center fixed`;
    body.style.backgroundSize = "cover";
}

// ======== Icon Setter ========
function setWeatherIcon(condition) {
    iconElement.className = ''; // reset
    iconElement.classList.add("fa-solid", "animate__animated");

    condition = condition.toLowerCase();
    if (condition.includes("cloud")) iconElement.classList.add("fa-cloud", "animate__fadeIn");
    else if (condition.includes("rain")) iconElement.classList.add("fa-cloud-rain", "animate__shakeX");
    else if (condition.includes("sun")) iconElement.classList.add("fa-sun", "animate__pulse");
    else if (condition.includes("snow")) iconElement.classList.add("fa-snowflake", "animate__bounce");
    else iconElement.classList.add("fa-cloud-sun"); // default icon
}

// ======== Fetch Weather Data ========
async function getWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();

        if (data.cod !== 200) {
            alert("City not found!");
            return;
        }

        // Update current weather
        cityNameElement.textContent = `${data.name}, ${data.sys.country}`;
        conditionElement.textContent = data.weather[0].main;
        tempElement.textContent = `${Math.round(data.main.temp)}°C`;

        humidityElement.textContent = `${data.main.humidity}%`;
        windElement.textContent = `${data.wind.speed} km/h`;
        feelsElement.textContent = `${Math.round(data.main.feels_like)}°C`;
        visibilityElement.textContent = `${data.visibility / 1000} km`;

        setBackground(data.weather[0].main);
        setWeatherIcon(data.weather[0].main);

        // Fetch 5-day forecast
        getForecast(city);

    } catch (error) {
        console.error(error);
    }
}

// ======== Fetch Forecast ========

async function getForecast(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data); // Check the data structure
  
      // Clear previous forecast
      forecastGrid.innerHTML = "";
  
      // Filter to get one forecast per day (around 12:00)
      const dailyForecasts = data.list.filter(item => item.dt_txt.includes("12:00:00"));
  
      dailyForecasts.forEach(day => {
        const date = new Date(day.dt_txt);
        const options = { weekday: "short" };
        const dayName = date.toLocaleDateString("en-US", options);
        const temp = Math.round(day.main.temp);
        const iconCode = day.weather[0].icon;
  
        const card = document.createElement("div");
        card.classList.add("forecast-card");
  
        card.innerHTML = `
          <p>${dayName}</p>
          <img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="${day.weather[0].description}">
          <h3>${temp}°C</h3>
        `;
  
        forecastGrid.appendChild(card);
      });
  
    } catch (error) {
      console.error("Error fetching forecast:", error);
    }
  }

// ======== Event Listeners ========
searchButton.addEventListener("click", () => {
    const city = searchInput.value.trim();
    if (city) getWeather(city);
});

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const city = searchInput.value.trim();
        if (city) getWeather(city);
    }
});


