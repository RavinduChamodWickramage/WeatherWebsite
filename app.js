// Function to format the current date
function getCurrentDate() {
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  return today.toLocaleDateString("en-US", options);
}

// Set today's date in the element
document.getElementById("today-date").textContent = getCurrentDate();

// Initial unit states
let isCelsius = true;
let isKmh = true;

// Get the temperature
const tempNumbers = [
  document.getElementById("temperature-number"),
  document.getElementById("day1-temp"),
  document.getElementById("day2-temp"),
  document.getElementById("day3-temp"),
  document.getElementById("day4-temp"),
  document.getElementById("day5-temp"),
  document.getElementById("day6-temp"),
  document.getElementById("day7-temp"),
  document.getElementById("hour00-temp"),
  document.getElementById("hour01-temp"),
  document.getElementById("hour02-temp"),
  document.getElementById("hour03-temp"),
  document.getElementById("hour04-temp"),
  document.getElementById("hour05-temp"),
  document.getElementById("hour06-temp"),
  document.getElementById("hour07-temp"),
  document.getElementById("hour08-temp"),
  document.getElementById("hour09-temp"),
  document.getElementById("hour10-temp"),
  document.getElementById("hour11-temp"),
  document.getElementById("hour12-temp"),
  document.getElementById("hour13-temp"),
  document.getElementById("hour14-temp"),
  document.getElementById("hour15-temp"),
  document.getElementById("hour16-temp"),
  document.getElementById("hour17-temp"),
  document.getElementById("hour18-temp"),
  document.getElementById("hour19-temp"),
  document.getElementById("hour20-temp"),
  document.getElementById("hour21-temp"),
  document.getElementById("hour22-temp"),
  document.getElementById("hour23-temp"),
  document.getElementById("c1-temp"),
  document.getElementById("c2-temp"),
  document.getElementById("c3-temp"),
];

// Get all temperature measurement elements
const tempMeasure = [
  document.getElementById("temperature-measurement"),
  document.getElementById("day1-temp-measurement"),
  document.getElementById("day2-temp-measurement"),
  document.getElementById("day3-temp-measurement"),
  document.getElementById("day4-temp-measurement"),
  document.getElementById("day5-temp-measurement"),
  document.getElementById("day6-temp-measurement"),
  document.getElementById("day7-temp-measurement"),
  document.getElementById("hour00-temp-measurement"),
  document.getElementById("hour01-temp-measurement"),
  document.getElementById("hour02-temp-measurement"),
  document.getElementById("hour03-temp-measurement"),
  document.getElementById("hour04-temp-measurement"),
  document.getElementById("hour05-temp-measurement"),
  document.getElementById("hour06-temp-measurement"),
  document.getElementById("hour07-temp-measurement"),
  document.getElementById("hour08-temp-measurement"),
  document.getElementById("hour09-temp-measurement"),
  document.getElementById("hour10-temp-measurement"),
  document.getElementById("hour11-temp-measurement"),
  document.getElementById("hour12-temp-measurement"),
  document.getElementById("hour13-temp-measurement"),
  document.getElementById("hour14-temp-measurement"),
  document.getElementById("hour15-temp-measurement"),
  document.getElementById("hour16-temp-measurement"),
  document.getElementById("hour17-temp-measurement"),
  document.getElementById("hour18-temp-measurement"),
  document.getElementById("hour19-temp-measurement"),
  document.getElementById("hour20-temp-measurement"),
  document.getElementById("hour21-temp-measurement"),
  document.getElementById("hour22-temp-measurement"),
  document.getElementById("hour23-temp-measurement"),
  document.getElementById("c1-temp-measurement"),
  document.getElementById("c2-temp-measurement"),
  document.getElementById("c3-temp-measurement"),
];

// Get the wind speed elements
const windValue = [
  document.getElementById("today-Wind-value"),
  document.getElementById("day1-Wind-value"),
  document.getElementById("day2-Wind-value"),
  document.getElementById("day3-Wind-value"),
  document.getElementById("day4-Wind-value"),
  document.getElementById("day5-Wind-value"),
  document.getElementById("day6-Wind-value"),
  document.getElementById("day7-Wind-value"),
  document.getElementById("today-Wind-value"),
  document.getElementById("hour00-wind-value"),
  document.getElementById("hour01-wind-value"),
  document.getElementById("hour02-wind-value"),
  document.getElementById("hour03-wind-value"),
  document.getElementById("hour04-wind-value"),
  document.getElementById("hour05-wind-value"),
  document.getElementById("hour06-wind-value"),
  document.getElementById("hour07-wind-value"),
  document.getElementById("hour08-wind-value"),
  document.getElementById("hour09-wind-value"),
  document.getElementById("hour10-wind-value"),
  document.getElementById("hour11-wind-value"),
  document.getElementById("hour12-wind-value"),
  document.getElementById("hour13-wind-value"),
  document.getElementById("hour14-wind-value"),
  document.getElementById("hour15-wind-value"),
  document.getElementById("hour16-wind-value"),
  document.getElementById("hour17-wind-value"),
  document.getElementById("hour18-wind-value"),
  document.getElementById("hour19-wind-value"),
  document.getElementById("hour20-wind-value"),
  document.getElementById("hour21-wind-value"),
  document.getElementById("hour22-wind-value"),
  document.getElementById("hour23-wind-value"),
  document.getElementById("c1-Wind-value"),
  document.getElementById("c2-Wind-value"),
  document.getElementById("c3-Wind-value"),
];

// Get the buttons
const celsiusBtn = document.getElementById("celsius-btn");
const fahrenheitBtn = document.getElementById("fahrenheit-btn");
const kmhBtn = document.getElementById("kmh-btn");
const mphBtn = document.getElementById("mph-btn");

// Convert temperature to Fahrenheit
function toFahrenheit(celsius) {
  return Math.round((celsius * 9) / 5 + 32);
}

// Convert temperature to Celsius
function toCelsius(fahrenheit) {
  return Math.round(((fahrenheit - 32) * 5) / 9);
}

// Convert wind speed to mph
function toMph(kmh) {
  return Math.round(kmh * 0.621371);
}

// Convert wind speed to km/h
function toKmh(mph) {
  return Math.round(mph / 0.621371);
}

// Set default button states and styles
function setDefaultStates() {
  celsiusBtn.style.backgroundColor = "black";
  celsiusBtn.style.color = "white";
  fahrenheitBtn.style.backgroundColor = "#d9d9d9";
  fahrenheitBtn.style.color = "black";

  kmhBtn.style.backgroundColor = "black";
  kmhBtn.style.color = "white";
  mphBtn.style.backgroundColor = "#d9d9d9";
  mphBtn.style.color = "black";

  tempMeasure.forEach((element) => {
    element.textContent = "°C";
  });

  windValue.textContent = `${parseInt(windValue.textContent)} km/h`;
}

// Handle temperature unit switch
celsiusBtn.addEventListener("click", () => {
  if (!isCelsius) {
    tempNumbers.forEach((tempNumber) => {
      const fahrenheit = parseInt(tempNumber.textContent);
      const celsius = toCelsius(fahrenheit);
      tempNumber.textContent = celsius;
    });
    tempMeasure.forEach((element) => {
      element.textContent = "°C";
    });
    isCelsius = true;

    celsiusBtn.style.backgroundColor = "black";
    celsiusBtn.style.color = "white";
    fahrenheitBtn.style.backgroundColor = "#d9d9d9";
    fahrenheitBtn.style.color = "black";
  }
});

fahrenheitBtn.addEventListener("click", () => {
  if (isCelsius) {
    tempNumbers.forEach((tempNumber) => {
      const celsius = parseInt(tempNumber.textContent);
      const fahrenheit = toFahrenheit(celsius);
      tempNumber.textContent = fahrenheit;
    });
    tempMeasure.forEach((element) => {
      element.textContent = "°F";
    });
    isCelsius = false;

    fahrenheitBtn.style.backgroundColor = "black";
    fahrenheitBtn.style.color = "white";
    celsiusBtn.style.backgroundColor = "#d9d9d9";
    celsiusBtn.style.color = "black";
  }
});

// Handle wind speed unit switch (fix)
kmhBtn.addEventListener("click", () => {
  if (!isKmh) {
    windValue.forEach((windElem) => {
      const mph = parseInt(windElem.textContent);
      const kmh = toKmh(mph);
      windElem.textContent = `${kmh} km/h`;
    });
    isKmh = true;

    kmhBtn.style.backgroundColor = "black";
    kmhBtn.style.color = "white";
    mphBtn.style.backgroundColor = "#d9d9d9";
    mphBtn.style.color = "black";
  }
});

mphBtn.addEventListener("click", () => {
  if (isKmh) {
    windValue.forEach((windElem) => {
      const kmh = parseInt(windElem.textContent);
      const mph = toMph(kmh);
      windElem.textContent = `${mph} mph`;
    });
    isKmh = false;

    mphBtn.style.backgroundColor = "black";
    mphBtn.style.color = "white";
    kmhBtn.style.backgroundColor = "#d9d9d9";
    kmhBtn.style.color = "black";
  }
});

// Initialize default state when the page loads
window.onload = function () {
  setDefaultStates();
  fetchWeather("Colombo");
  fetchWeatherCity1("London");
  fetchWeatherCity2("Rome");
  fetchWeatherCity3("Washington");
};

// ---------- After Process using APIs ----------

const apiKey = "d1da8c9e217f4321a3673526240809";

document.getElementById("search-btn").addEventListener("click", function () {
  const city = document.getElementById("search-current-place").value.trim();
  if (city) {
    fetchWeather(city);
    document.getElementById("search-current-place").style.backgroundColor =
      "transparent";
  } else {
    alert("Please enter a city name.");
  }
});

function fetchWeather(city) {
  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      updateWeatherInfo(data);
      updateDateTime(data.current.last_updated_epoch);
      updateWeeklyForecast(data.forecast.forecastday);
      updateHourlyForecast(data.forecast.forecastday[0].hour);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

function updateWeatherInfo(data) {
  document.getElementById(
    "current-place"
  ).textContent = `${data.location.name}, ${data.location.country}`;
  document.getElementById("temperature-number").textContent = Math.round(
    data.current.temp_c
  );
  document.getElementById("temperature-measurement").textContent = "°C";
  document.getElementById(
    "today-rain-value"
  ).textContent = `${data.current.precip_mm} mm`;
  document.getElementById(
    "today-humidity-value"
  ).textContent = `${data.current.humidity}%`;
  document.getElementById("today-Wind-value").textContent = `${Math.round(
    data.current.wind_kph
  )} km/h`;

  const iconUrl = `https:${data.current.condition.icon}`;
  document.getElementById("current-weather-icon").src = iconUrl;

  // updateMap(data.location.lat, data.location.lon);
}

// function updateMap(lat, lon) {
//   const mapIframe = document.getElementById("current-place-map");
//   const mapUrl = `https://www.google.com/maps/embed/v1/view?key=AIzaSyBh2FhXsy64NdpecVfrnUhIGnCugfuW12s&center=${lat},${lon}&zoom=10`;
//   mapIframe.src = mapUrl;
// }

function updateDateTime(lastUpdatedEpoch) {
  const lastUpdatedDate = new Date(lastUpdatedEpoch * 1000);
  const dateOptions = {
    weekday: "long",
  };
  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const date = lastUpdatedDate.toLocaleDateString("en-US", dateOptions);
  const time = lastUpdatedDate.toLocaleTimeString("en-US", timeOptions);

  document.getElementById("today").textContent = `${date},`;
  document.getElementById("time").textContent = time;
}

function updateWeeklyForecast(forecastDays) {
  for (let i = 0; i <= 7; i++) {
    const dayForecast = forecastDays[i];

    if (dayForecast) {
      const dayTitle = new Date(dayForecast.date).toLocaleDateString("en-US", {
        weekday: "short",
      });

      document.getElementById(`day${i + 1}-title`).textContent = dayTitle;
      document.getElementById(`day${i + 1}-temp`).textContent = Math.round(
        dayForecast.day.avgtemp_c
      );
      document.getElementById(
        `day${i + 1}-rain-value`
      ).textContent = `${dayForecast.day.daily_chance_of_rain}%`;
      document.getElementById(
        `day${i + 1}-humidity-value`
      ).textContent = `${dayForecast.day.avghumidity}%`;
      document.getElementById(
        `day${i + 1}-Wind-value`
      ).textContent = `${Math.round(dayForecast.day.maxwind_kph)} km/h`;

      const iconUrl = `https:${dayForecast.day.condition.icon}`;
      document.getElementById(`day${i + 1}-icon`).src = iconUrl;
    }
  }
}

function updateHourlyForecast(hourlyData) {
  hourlyData.forEach((hour, index) => {
    if (index < 24) {
      const temp = Math.floor(hour.temp_c);
      const rain = Math.floor(hour.chance_of_rain);
      const humidity = Math.floor(hour.humidity);
      const wind = Math.floor(hour.wind_kph);

      document.getElementById(
        `hour${index.toString().padStart(2, "0")}-temp`
      ).textContent = temp;
      document.getElementById(
        `hour${index.toString().padStart(2, "0")}-rain-value`
      ).textContent = `${rain}%`;
      document.getElementById(
        `hour${index.toString().padStart(2, "0")}-humidity-value`
      ).textContent = `${humidity}%`;
      document.getElementById(
        `hour${index.toString().padStart(2, "0")}-wind-value`
      ).textContent = `${wind} km/h`;
    }
  });
}

// ---------- 3 Cities in 3 Countries ----------
// City1
document
  .getElementById("map1-search-btn")
  .addEventListener("click", function () {
    const city1 = document.getElementById("search-map1").value.trim();
    if (city1) {
      fetchWeatherCity1(city1);
      document.getElementById("search-map1").style.backgroundColor =
        "transparent";
    } else {
      alert("Please enter a city name.");
    }
  });

function fetchWeatherCity1(city1) {
  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city1}&days=7&aqi=no&alerts=no`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((dataMap1) => {
      updateWeatherInfoCity1(dataMap1);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

function updateWeatherInfoCity1(dataMap1) {
  document.getElementById(
    "city1"
  ).textContent = `${dataMap1.location.name}, ${dataMap1.location.country}`;
  document.getElementById("c1-temp").textContent = Math.round(
    dataMap1.current.temp_c
  );
  document.getElementById("c1-temp-measurement").textContent = "°C";
  document.getElementById(
    "c1-rain-value"
  ).textContent = `${dataMap1.current.precip_mm} mm`;
  document.getElementById(
    "c1-humidity-value"
  ).textContent = `${dataMap1.current.humidity}%`;
  document.getElementById("c1-Wind-value").textContent = `${Math.round(
    dataMap1.current.wind_kph
  )} km/h`;
}

// City2
document
  .getElementById("map2-search-btn")
  .addEventListener("click", function () {
    const city2 = document.getElementById("search-map2").value.trim();
    if (city2) {
      fetchWeatherCity2(city2);
      document.getElementById("search-map2").style.backgroundColor =
        "transparent";
    } else {
      alert("Please enter a city name.");
    }
  });

function fetchWeatherCity2(city2) {
  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city2}&days=7&aqi=no&alerts=no`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((dataMap2) => {
      updateWeatherInfoCity2(dataMap2);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

function updateWeatherInfoCity2(dataMap2) {
  document.getElementById(
    "city2"
  ).textContent = `${dataMap2.location.name}, ${dataMap2.location.country}`;
  document.getElementById("c2-temp").textContent = Math.round(
    dataMap2.current.temp_c
  );
  document.getElementById("c2-temp-measurement").textContent = "°C";
  document.getElementById(
    "c2-rain-value"
  ).textContent = `${dataMap2.current.precip_mm} mm`;
  document.getElementById(
    "c2-humidity-value"
  ).textContent = `${dataMap2.current.humidity}%`;
  document.getElementById("c2-Wind-value").textContent = `${Math.round(
    dataMap2.current.wind_kph
  )} km/h`;
}

// City3
document
  .getElementById("map3-search-btn")
  .addEventListener("click", function () {
    const city3 = document.getElementById("search-map3").value.trim();
    if (city3) {
      fetchWeatherCity3(city3);
      document.getElementById("search-map3").style.backgroundColor =
        "transparent";
    } else {
      alert("Please enter a city name.");
    }
  });

function fetchWeatherCity3(city3) {
  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city3}&days=7&aqi=no&alerts=no`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((dataMap3) => {
      updateWeatherInfoCity3(dataMap3);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

function updateWeatherInfoCity3(dataMap3) {
  document.getElementById(
    "city3"
  ).textContent = `${dataMap3.location.name}, ${dataMap3.location.country}`;
  document.getElementById("c3-temp").textContent = Math.round(
    dataMap3.current.temp_c
  );
  document.getElementById("c3-temp-measurement").textContent = "°C";
  document.getElementById(
    "c3-rain-value"
  ).textContent = `${dataMap3.current.precip_mm} mm`;
  document.getElementById(
    "c3-humidity-value"
  ).textContent = `${dataMap3.current.humidity}%`;
  document.getElementById("c3-Wind-value").textContent = `${Math.round(
    dataMap3.current.wind_kph
  )} km/h`;
}
