const apiKey = "c38ecc1f777622100d23bfbb4380137d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weather = document.querySelector('.weather-icon');
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');


async function checkWeather(city){
    const reponse = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(reponse.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }else{
        let data = await reponse.json();

        //Changing HTML inner Text according to API data 

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
        

        if(data.weather[0].main == "Clouds"){
            weather.src = "Images/clouds.png"
        }else if(data.weather[0].main == "Clear"){
            weather.src = "Images/clear.png"
        }else if(data.weather[0].main == "Drizzle"){
            weather.src = "Images/drizzle.png"
        }else if(data.weather[0].main == "Mist"){
            weather.src = "Images/mist.png"
        }else if(data.weather[0].main == "Rain"){
            weather.src = "Images/rain.png"
        }else if(data.weather[0].main == "Snow"){
            weather.src = "Images/snow.png"
        }

        document.querySelector('.error').style.display = 'none';
        document.querySelector('.weather').style.display = 'block';
    }

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});