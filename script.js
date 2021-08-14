function searchCity(){
var searchValue= document.querySelector("#search-value").value
weatherApi(searchValue)
  console.log(searchValue)
}
document.getElementById("search-button").addEventListener("click", searchCity)

function weatherApi (searchValue){
 fetch("http://api.openweathermap.org/data/2.5/weather?q="+searchValue+"&units=metric&appid=a21bd5083b0e1585843e6ff136f49bca")
  .then(response => response.json())
  .then(data => {
    var todayDiv = document.querySelector("#today")

    var cityName = document.createElement("h2")
    cityName.textContent= `${data.name}`

     var temp = document.createElement("p")
     temp.textContent= `temp: ${data.main.temp}`

   var humidity = document.createElement("h4")
   humidity.textContent=`${data.main.humidity}`

  var uvIndex = document.createElement("h4")
  // uvIndex.textContent = `${data.}`// work on that one with another API call
    var windSpeed = document.createElement("h4")
    windSpeed.textContent= `${data.wind.speed}`
    
    todayDiv.append(cityName, temp, humidity, windSpeed)
    
    console.log(data)});
 
}

