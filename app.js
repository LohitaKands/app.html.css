const apiKey = '3caf91e296344855ca38b928c8b78af3'; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');

searchButton.addEventListener('click', () => {                                          
    const city = cityInput.value;
    getWeatherData(city);
});

function getWeatherData(city) {
    fetch(`${apiUrl}${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            const { temp, humidity, pressure } = data.main;
            const { description, icon } = data.weather[0];
            weatherInfo.innerHTML = `
            <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon" class="img">
                <h2>${city}</h2>
                <p>Temperature: ${temp}°C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Pressure: ${pressure} hPa</p>
                <p>Description: ${description}</p>  
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.textContent = 'Error: Unable to fetch weather data';
        });
}