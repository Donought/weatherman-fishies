let prop = 1; // Prop = proportion
let tmp = 0;
let weather = "";
let json;
let json2;
let api;
let tillSet;
let city;
let sunset;
let sunSetTime;
let inp;
let windSpeed;
let windDir;
let weatherD;
let relevantFish = [];

// Symboler
let cloudImg;
let directionImg;
let fishImg;
let humidityImg;
let rainImg;
let sunsetImg;
let tempImg;
let windImg;

function preload() {
  city = "Viborg"; // The standard city that the website starts with
  api = "e812164ca05ed9e0344b89ebe273c141";

  // Load datasets
  json = loadJSON(url(city, api), function () {
    json2 = loadJSON(
      "https://api.open-meteo.com/v1/forecast?latitude=" +
        json.coord.lat +
        "&longitude=" +
        json.coord.lon +
        "&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Europe%2FBerlin"
    );
  });

  // Load images from assets folder
  cloudImg = loadImage("assets/cloud.png");
  directionImg = loadImage("assets/direction.png");
  fishImg = loadImage("assets/fish.png");
  fishiesImg = loadImage("assets/fishies.png");
  humidityImg = loadImage("assets/humidity.png");
  rainImg = loadImage("assets/rain.png");
  sunsetImg = loadImage("assets/sunset.png");
  tempImg = loadImage("assets/temp.png");
  windImg = loadImage("assets/wind.png");
}

function setup() {
  // Prop makes the canvas scalable. But as we eventually abandoned scalability, this isn't as necessary
  createCanvas(innerWidth - 16.45 * prop, (innerHeight - 0.0001) * prop);

  // Creates input field
  inp = createInput("");
  inp.size(200, 40 * prop);
  inp.position(width - inp.size().width - 40, 40 * 2);

  refresh(); // Refresh is run once in setup in order to establish the data

  relevantFish = season();

  // Debugging in console
  for (i = 0; i < relevantFish.length; i++) {
    console.log(
      "Navn: " + relevantFish[i].name + " | Værdi: " + relevantFish[i].val
    );
  }
}

// All of the graphics functions are run in draw to make sure they are constantly updated
function draw() {
  background(255);
  fill(0);
  menuline();
  fpage();
  futureWeather();
}

function refresh() {
  // Gather raw data
  sunset = json.sys.sunset;
  tmp = json.main.temp;
  tmpmin = json.main.temp_min;
  tmpmax = json.main.temp_max;
  tmpfeel = json.main.feels_like;
  humidity = json.main.humidity;
  weather = json.weather[0].description;
  precipitation = json2.daily.precipitation_sum[0];
  windSpeed = json.wind.speed;
  windDeg = json.wind.deg;

  // If statements translating the wind direction into a cardinal directions
  let steps = 360 / 16;
  if (windDeg < steps || windDeg > steps * 15) {
    windDir = "Nord";
  } else if (windDeg > steps && windDeg < steps * 3) {
    windDir = "Nordvest";
  } else if (windDeg > steps * 3 && windDeg < steps * 5) {
    windDir = "Vest";
  } else if (windDeg > steps * 5 && windDeg < steps * 7) {
    windDir = "Sydvest";
  } else if (windDeg > steps * 7 && windDeg < steps * 9) {
    windDir = "Syd";
  } else if (windDeg > steps * 9 && windDeg < steps * 11) {
    windDir = "Sydøst";
  } else if (windDeg > steps * 11 && windDeg < steps * 13) {
    windDir = "Øst";
  } else if (windDeg > steps * 13 && windDeg < steps * 15) {
    windDir = "Nordøst";
  }

  let date = new Date(sunset * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();
  sunSetTime = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  // Debugging in console
  console.log("Current city: " + city);
  console.log("Current tmp is: " + tmp + "°");
  console.log("Current weather: " + weather);
  console.log("Sunset is at: " + sunSetTime);
  console.log("Min tmp is: " + tmpmin + "°");
  console.log("Max tmp is: " + tmpmax + "°");
  console.log("Realfeel is: " + tmpfeel + "°");
  console.log("Humidity is: " + humidity + "%");
  console.log("Precipitation is: " + precipitation + " mm");

  console.log("\nFuture temperatures:");
  for (i = 1; i < 6; i++) {
    console.log(
      "  " +
        json2.daily.time[i] +
        "\n    Min: " +
        json2.daily.temperature_2m_min[i] +
        json2.daily_units.temperature_2m_min +
        "\n    Max: " +
        json2.daily.temperature_2m_max[i] +
        json2.daily_units.temperature_2m_max
    );
  }
}

// Function that returns an api link with a custom city name. The api variable is the key
function url(city, api) {
  return (
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=metric&APPID=" +
    api
  );
}

// This function runs on any keypress
function keyPressed() {
  // Checks whether the key pressed was ENTER or not
  if (keyCode === ENTER) {
    // Stores current city name in the input field
    city = inp.value();
    console.log(city);

    // Here the datasets are loaded again, taking the new city into consideration
    // As the load functions are asynchronous, it's necessary to make them run after each other (as json2 uses info from json's dataset)
    // This is achieved through the use of the second argument in loadJSON, which is the function that is to run when it's done loading
    json = loadJSON(url(city, api), function () {
      temp = loadJSON(
        "https://api.open-meteo.com/v1/forecast?latitude=" +
          json.coord.lat +
          "&longitude=" +
          json.coord.lon +
          "&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Europe%2FBerlin",
        function () {
          json2 = temp;
          refresh();
        }
      );
    });
  }
}
