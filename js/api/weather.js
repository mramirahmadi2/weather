const BASE_URL = 'api.openweathermap.org/data/2.5';
const API_KEY= 'fad93a5e6e26dc6737ed81e45deaea62';

 function getCurrentWeather(cityID){
   return   fetch(`${BASE_URL}weather?id=${cityID}&appid=${API_KEY}`)
       .then(response => response)
       .catch(err => err);

}
 function getfivedaysWeather(cityID){
    return   fetch(`${BASE_URL}forcast?id=${cityID}&appid=${API_KEY}`)
        .then(response => response)
        .catch(err => err);

}

