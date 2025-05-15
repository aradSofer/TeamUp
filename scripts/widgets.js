import * as utils from "./utils/helpers.js";

const weatherMode = $("#weather-mode-select");
const weatherLocation = $("#weather-location-select");
const weatherContent = $("#weather-content");
function displayWeather(data, mode) {
  let weather = data.current;
  let location = data.location;
  let weatherDiv = "";
  if (mode == "current") {
    weatherDiv = `
        <div class="weather-card">
            <h2>${location.name}</h2>
            <p>${weather.temp_c}°C</p>
            <p>${weather.condition.text}</p>
            <img src="${weather.condition.icon}" alt="${weather.condition.text}">
        </div>
    `;
  } else if (mode == "forecast") {
    let forecast = data.forecast.forecastday;
    for (let day in forecast) {
      let date = forecast[day].date;
      let dayOfWeek = new Date(date).toLocaleString("en-US", {
        weekday: "long",
      });
      let maxTemp = forecast[day].day.maxtemp_c;
      let minTemp = forecast[day].day.mintemp_c;
      let condition = forecast[day].day.condition.text;
      let icon = forecast[day].day.condition.icon;
      weatherDiv += `
                <div class="weather-card">
                    <h6>${dayOfWeek}</h6>
                    <p>${date}</p>
                    <p>Max: ${maxTemp}°C</p>
                    <p>Min: ${minTemp}°C</p>
                    <p>${condition}</p>
                    <img src="${icon}" alt="${condition}">
                </div>
            `;
    }
  }
  weatherContent.addClass("d-flex flex-wrap justify-content-between");
  weatherContent.html(weatherDiv);
}

// Get the current user's location using the IP address
let location;
let ipData = await utils.fetchData("ipInfo");
location = ipData.city;
weatherLocation.val(location.toLowerCase());
const [lat, long] = ipData.loc.split(",");
let requestOptions = `q=${lat},${long}`;

// Fetch the current weather data on load
let weatherData = await utils.fetchData("weatherCurrent", requestOptions);
displayWeather(weatherData, "current");

// Fetch the weather data based on user selection
weatherMode.on("change", async function () {
  let mode;
  mode = weatherMode.val();
  let api = mode == "current" ? "weatherCurrent" : "weatherForecast";
  if (mode == "current") {
    requestOptions = `q=${location}`;
    weatherData = await utils.fetchData(api, requestOptions);
    displayWeather(weatherData, "current");
  } else {
    let timeSpan = weatherMode.val();
    requestOptions = `q=${location}&days=${timeSpan}`;
    weatherData = await utils.fetchData(api, requestOptions);
    displayWeather(weatherData, "forecast");
  }
});

weatherLocation.on("change", function () {
  location = weatherLocation.val();
  weatherMode.trigger("change");
});

// Currency Exchange
const currencyContent = $("#currency-result");
const currencyFromSelector = $("#currency-from");
const currencyToSelector = $("#currency-to");
const currencyValue = $("#currency-amount");
let baseCurrency = currencyFromSelector.val();
let targetCurrency = currencyToSelector.val();

function displayCurrency(data) {
  let currency = data.result;
  let currencyDiv = `
        <div class="currency-card">
            <h2>${baseCurrency} to ${targetCurrency}</h2>
            <p>${currencyValue.val()} ${baseCurrency} = ${currency} ${targetCurrency}</p>
        </div>
    `;
  currencyContent.html(currencyDiv);
}

$('#convert').on('click', async () => {
    baseCurrency = currencyFromSelector.val();
    targetCurrency = currencyToSelector.val();
    let amount = currencyValue.val();
    if(amount == ""){
        alert("Please enter an amount to convert");
        return;
    }
    let requestOptions = `from=${baseCurrency}&to=${targetCurrency}&amount=${amount}`;
    console.log(requestOptions);
    let currencyData = await utils.fetchData("currency", requestOptions);
    console.log(currencyData);
    displayCurrency(currencyData);
})

$('#swap').on('click', () => {
    let temp = baseCurrency;
    baseCurrency = targetCurrency;
    targetCurrency = temp;
    currencyFromSelector.val(baseCurrency);
    currencyToSelector.val(targetCurrency);
    $('#convert').trigger('click');
})

$('#clear').on('click', () => {
    currencyFromSelector.val("USD");
    currencyToSelector.val("EUR");
    currencyValue.val("");
    currencyContent.html("");
})