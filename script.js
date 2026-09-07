const apiKey = "5f2d0f6509149b6e45a0f18e62d97c7a";
const  apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=kigali";

const  checkWeather =async ()=>{
    const response =  await fetch(apiUrl+ `&appid=${apiKey}`)
    var data = await response.json();

    console.log(data)
}
checkWeather()