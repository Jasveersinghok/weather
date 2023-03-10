const captillize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1, string.length);
};

const getWeather = (city) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1cfdd1ac979a38b9ff73d7790071143e&units=metric`
  ).then((response) => {
    response.json().then((data) => {
        if (data.cod == 200) {
            humidity.innerHTML ="Humidity "+data.main.humidity 
           pressure.innerHTML ="pressure " +data.main.pressure 
           visibility.innerHTML ="Visibility "+data.visibility 
           temp.innerHTML =  "Temprature "+data.main.temp 
          temp_min.innerHTML ="Min Temprature "+data.main.temp_min 
          temp_max.innerHTML ="max Temprature "+data.main.temp_max 
          speed.innerHTML ="Wind Speed "+data.wind.speed 
          deg.innerHTML ="Wind deg "+data.wind.deg 
          gust.innerHTML ="Wind gust "+data.wind.gust 
          cityName.innerHTML = "Weather of " + captillize(city)
        }else{
            cityName.innerHTML  = "city not found"
            humidity.innerHTML ="Humidity"
            pressure.innerHTML ="pressure " 
            visibility.innerHTML  = "visibility"
            temp.innerHTML =  "Temprature "
           temp_min.innerHTML ="Min Temprature "
           temp_max.innerHTML ="max Temprature "
           speed.innerHTML ="Wind Speed "
           deg.innerHTML ="Wind deg "
           gust.innerHTML ="Wind gust "
        }
    });
  })
};
getWeather("dinanagar");
submit.addEventListener("click",()=>{
    let value = input.value;
    getWeather(value)
})
