let prop = 1; //Prop = proportion
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

function preload() {
  city = "Viborg";
  api = "e812164ca05ed9e0344b89ebe273c141";
  json = loadJSON(url(city, api), function () {
    json2 = loadJSON("https://api.open-meteo.com/v1/forecast?latitude=" + json.coord.lat + "&longitude=" + json.coord.lon + "&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Europe%2FBerlin");
  });
};

function setup() {
  createCanvas(innerWidth - 16.45 * prop, (innerHeight - 0.0001) * prop);
  inp = createInput("");
  inp.size(200, 40 * prop);
  inp.position(width - inp.size().width, 40 * 3);
  refresh();

  relevantFish = season();

  for (i = 0; i < relevantFish.length; i++) {
    console.log(
      "Navn: " + relevantFish[i].name + " | Værdi: " + relevantFish[i].val
    );
  }
}

function draw() {
  background(255);
  fill(0);
  menuline();
  fpage();
  tempGraph(width / 4 * 3, height / 4 * 2, 1, 1);
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

  var date = new Date(sunset * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  let sunSetTime = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  // Testing area
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
    console.log("  " + json2.daily.time[i] + "\n    Min: " + json2.daily.temperature_2m_min[i] + json2.daily_units.temperature_2m_min + "\n    Max: " + json2.daily.temperature_2m_max[i] + json2.daily_units.temperature_2m_max);
  }
}

function url(city, api) {
  return (
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=metric&APPID=" +
    api
  );
}

function keyPressed() {
  if (keyCode === ENTER) {
    city = inp.value();
    console.log(city);
    json = loadJSON(url(city, api), function () {
      json2 = loadJSON("https://api.open-meteo.com/v1/forecast?latitude=" + json.coord.lat + "&longitude=" + json.coord.lon + "&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Europe%2FBerlin", refresh);
    });
  }
}


function menuline() {
  let spacing = 260;
  let hspace = 120;
  fill(0, 0, 240);
  rect(0, 0, width, hspace * prop);
  strokeWeight(2);
  line(hspace * prop, -hspace * prop, hspace * prop, hspace * prop);
  for (let i = 0; i < 9; i++) {
    line((hspace * prop) + (spacing * prop) * i, -spacing * prop, (hspace * prop) + spacing * prop * i, hspace * prop);
  }
  line(0, hspace * prop, width, hspace * prop);
  strokeWeight(1);
}

