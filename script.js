function searchCity(){
var searchValue= document.querySelector("#search-value").value
weatherApi(searchValue)
  
}
document.getElementById("search-button").addEventListener("click", searchCity)

function weatherApi (searchValue){
 fetch("http://api.openweathermap.org/data/2.5/weather?q="+searchValue+"&units=metric&appid=a21bd5083b0e1585843e6ff136f49bca")
  .then(response => response.json())
  .then(data => {
    var todayDiv = document.querySelector("#today")

//clear content
    todayDiv.textContent = ""

var parentDiv= document.createElement("div")
parentDiv.classList.add("card")

    var cityName = document.createElement("h2")
    cityName.textContent= `City name: ${data.name}`
    cityName.classList.add("card-text")

    var weatherIcon = document.createElement("img")
    weatherIcon.setAttribute("src",`http://openweathermap.org/img/w/${data.weather[0].icon}.png`)
   

     var temp = document.createElement("h4")
     temp.textContent= `Temp: ${data.main.temp}`

   var humidity = document.createElement("h4")
   humidity.textContent=`Humidity: ${data.main.humidity}`

    var windSpeed = document.createElement("h4")
    windSpeed.textContent= `Wind Speed: ${data.wind.speed}`
     parentDiv.append(cityName, weatherIcon, temp, humidity, windSpeed)



    todayDiv.append(parentDiv)
    oneCallUv(data.coord.lat, data.coord.lon)
    });

}

function oneCallUv (lat, lon){
  fetch ("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&units=metric&appid=a21bd5083b0e1585843e6ff136f49bca")
  .then(response => response.json())
  .then(data => {
    console.log(data)
    var todayDiv = document.querySelector("#today")
    var todayUv = document.createElement("h4")
    todayUv.textContent= `UV index: ${data.current.uvi}`
  
for(var i=1; i< data.daily.length-2; i++){

var forecastDiv = document.querySelector("#forecast")

  var forecastTemp = document.createElement("h4")
  forecastTemp.textContent= ` ${data.daily[i].temp.day}`

  var forecastHumid = document.createElement("h4")
  forecastHumid.textContent= `${data.daily[i].humidity}`
//create elements for each one
var forecastWind = document.createElement("h4")
forecastWind.textContent= ` ${data.daily[i].weather.wind_speed}`

var forecastUv = document.createElement("h4")
forecastUv.textContent=`${data.daily[i].uvi}`

var forecastIcon = document.createElement("h4")
forecastIcon.textContent= `${data.daily[i].icon}`



forecastDiv.append(forecastTemp, forecastWind, forecastHumid,forecastUv,forecastIcon)

}

 todayDiv.append(todayUv);

 var fiveDayContainerEl= document.querySelector("#five-day-container");
 fiveDayContainerEl.append(todayDiv);
 
   })
   
}


 // to clear the old content to show new content use
 // repoContainerEl.textContent = "";
 // repoSearchTerm.textContent = searchTerm;