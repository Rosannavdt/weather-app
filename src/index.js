function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let city = document.querySelector("#city");
  let description = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  city.innerHTML = response.data.name;
  description.innerHTML = response.data.weather[0].description;
  humidity.innerHTML = response.data.main.humidity;
  wind.innerHTML = Math.round(response.data.wind.speed);

  let icon = document.querySelector("#current-weather-icon");
  icon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  icon.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
  let apiKey = "92a130a46565e7d85d7d55d01afb2d4a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function doSubmitting(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#input");
  search(cityInput.value);
}

search("New York");

let form = document.querySelector("#search-form");
form.addEventListener("submit", doSubmitting);

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let newDate = new Date();
let currentHour = newDate.getHours();
if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}
let currentMinute = newDate.getMinutes();
if (currentMinute < 10) {
  currentMinute = `0${currentMinute}`;
}
let currentDay = days[newDate.getDay()];
let currentMonth = months[newDate.getMonth()];
let currentDate = newDate.getDate();
let currentYear = newDate.getFullYear();

let time = document.querySelector("#time");
let day = document.querySelector("#day");

let date = document.querySelector("#date");

time.innerHTML = `${currentHour} : ${currentMinute} `;
day.innerHTML = `${currentDay}`;
date.innerHTML = `${currentMonth}, ${currentDate} , ${currentYear}`;
