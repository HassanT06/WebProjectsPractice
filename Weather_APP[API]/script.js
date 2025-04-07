const api_key="b95b975519444d2db4c124710250704"
//note this free tier api key is likely expired/limited now
//free individual keys can be generated at weatherapi.com
const result = document.querySelector(".weatherResult")
const button = document.querySelector(".getWeather")

button.addEventListener("click", function() {
    city = document.querySelector(".city").value.trim();
    
    const url = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=no`;
    fetch(url)
    .then(response => response.json())
    .then((data) => {

        if(data.error){
            result.style.display = "flex"
            result.innerHTML = `<h2>${data.error.message}</h2>`
            return;
        }
        
        result.style.display = "flex"
        const weather = data.current;
        result.innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p><strong>${weather.condition.text}</strong></p>
        <p>Temperature: ${weather.temp_c}°C</p>
        <img src="https:${weather.condition.icon}" alt="${weather.condition.text}" />
      `;

    })
    .catch((error) => {
        result.style.display = "flex"
        result.innerHTML = `<h2>Error fetching weather data</h2>`})

})

