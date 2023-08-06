const API_KEY = "d986f96427b8be79086986b30bc65e93";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${Math.round(data.main.temp)}°`;
      // weather.innerText = `${data.weather[0].main} / ${Math.round(
      //   data.main.temp
      // )}°`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you. ㅋ");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
