const apiKey = "9c3f5256306e78bab2be4389feec1de1";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?appid=9c3f5256306e78bab2be4389feec1de1&units=metric";

const btn = document.querySelector("#btn");
const wImg = document.querySelector(".weatherimg");

async function checkWeather(){
    const response = await fetch(apiURL + "&q=indore");
    let data = await response.json();

   document.querySelector(".temperature").innerText = Math.floor(data.main.temp) + "°c";
   document.querySelector(".city").innerText = data.name;
   document.querySelector("#humidity").innerText = data.main.humidity + "%";
   document.querySelector("#wind").innerText = data.wind.speed + " km/h";

    if(data.weather[0].main === "Clear"){
        wImg.src = "img/clear.png";
    }
    else if(data.weather[0].main === "Clouds"){
        wImg.src = "img/clouds.png";
    }
    else if(data.weather[0].main === "Drizzle"){
        wImg.src = "img/drizzle.png";
    }
    else if(data.weather[0].main === "Humidity"){
        wImg.src = "img/humidity.png";
    }
    else if(data.weather[0].main === "Mist"){
        wImg.src = "img/mist.png";
    }
    else if(data.weather[0].main === "Rain"){
        wImg.src = "img/rain.png";
    }
    else{
        wImg.src = "img/snow.png";
    }
}

checkWeather();

btn.addEventListener("click", async (evt) =>{
    evt.preventDefault();
    let city = document.querySelector(".search input").value;
    
    const response = await fetch(apiURL + `&q=${city}`);    
    let data = await response.json();

   document.querySelector(".temperature").innerText = Math.floor(data.main.temp) + "°c";
   document.querySelector(".city").innerText = data.name;
   document.querySelector("#humidity").innerText = data.main.humidity + "%";
   document.querySelector("#wind").innerText = data.wind.speed + " km/h";

    if(data.weather[0].main === "Clear"){
        wImg.src = "img/clear.png";
    }
    else if(data.weather[0].main === "Clouds"){
        wImg.src = "img/clouds.png";
    }
    else if(data.weather[0].main === "Drizzle"){
        wImg.src = "img/drizzle.png";
    }
    else if(data.weather[0].main === "Humidity"){
        wImg.src = "img/humidity.png";
    }
    else if(data.weather[0].main === "Mist"){
        wImg.src = "img/mist.png";
    }
    else if(data.weather[0].main === "Rain"){
        wImg.src = "img/rain.png";
    }
    else{
        wImg.src = "img/snow.png";
    }
});