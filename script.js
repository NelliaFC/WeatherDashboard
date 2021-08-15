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
   

     var temp = document.createElement("p")
     temp.textContent= `temp: ${data.main.temp}`

   var humidity = document.createElement("h4")
   humidity.textContent=`humidity: ${data.main.humidity}`

    var windSpeed = document.createElement("h4")
    windSpeed.textContent= `Wind Speed: ${data.wind.speed}`
    parentDiv.append(cityName, weatherIcon, temp, humidity, windSpeed)



    todayDiv.append(parentDiv)
    oneCallUv(data.coord.lat, data.coord.lon)
    console.log(data)});

}

function oneCallUv (lat, lon){
  fetch ("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid=a21bd5083b0e1585843e6ff136f49bca")
  .then(response => response.json())
  .then(data => {
    console.log(data)
    var todayDiv = document.querySelector("#today")
    var todayUv = document.createElement("h2")
    todayUv.textContent= `uv index: ${data.current.uvi}`
for(var i=1; i< data.daily.length-2; i++){

var forecastDiv = document.querySelector("#forecast")

  var forecastTemp = document.createElement("h4")
  forecastTemp.textContent= `${data.daily[i].temp.day}`

  var forecastHumid = document.createElement("h4")
  forecastHumidity.textContent= `${data.}`
//create elements for each one
var forecastWind = document.createElement("h4")
var forecastUv = document.createElement("h4")
var forecastIcon = document.createElement("h4")



forecastDiv.append(forecastTemp, forecastWind, forecastHumid,forecastUv,forecastIcon)

}

todayDiv.append(todayUv);
  })
  
}


// to clear the old content to show new content use
// repoContainerEl.textContent = "";
// repoSearchTerm.textContent = searchTerm;