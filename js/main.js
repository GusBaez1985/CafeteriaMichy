const APIKEY = "b929d050e36be872a855bc32d0f4f173";

const form = document.getElementById("form");

const inputSearch = document.getElementById("search");

const cityNotFound = 404;

// Convierto los grados Kelvin a Celsius
const showCelsius = (aParam) => {
  const footer = document.getElementById("footer");
  const temp = Math.floor(aParam.main.temp - 273);
  const span = document.createElement("span");
  span.id = "weather";
  span.classList.add("weather");
  span.innerHTML = `<span>
                    <img src="http://openweathermap.org/img/wn/${aParam.weather[0].icon}@2x.png" width="50" height="45"/>
                   </span>
                   <span> 
                    <small> ${aParam.name} ${temp}°</small>
                   </span>
  `;

  footer.appendChild(span);
  return temp;
};

const getWeatherByCity = async (city, APIKEY) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
  );
  console.log("Esta es la respuesta de fetch (guardada en Response)", response);

  // Se parsea la info:
  const dataSerialized = await response.json();
  console.log("Data parseada del Response:", dataSerialized); // Este es el resultado de parsear la respuesta del fetch!!

  if (response.status === cityNotFound) {
    Toastify({
      text: "La ciudad no existe",
      duration: 2000,
      style: {
        background: "#818283",
      },
    }).showToast();
  }

  console.log(`La temperatura de ${city} es de ${dataSerialized.main.temp}`);
  console.log(`Grados Ceilsius: ${showCelsius(dataSerialized)}`);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = inputSearch.value;
  city && getWeatherByCity(city, APIKEY);
});
