const UrlBase ="https://api.openweathermap.org/data/2.5/weather";
const ApiKey = "a91d6ae9de2b4141b924c3d084e9624c";
const btnCiudad = document.querySelector('#btnCiudad');
const inputCity = document.querySelector('#city');


const fetchApi = url=> fetch(url).then(response=>response.json());

async function getClima(lat,lon,apiKey){
    const url =`${ UrlBase }?lat=${ lat }&lon=${ lon }&appid=${ apiKey }`;
    const clima = await fetchApi(url);
    console.log(clima);
    document.querySelector('#left h2').innerHTML = clima.name;
    const temperature = (clima.main.temp-273.15).toFixed();
    pintaTemp(temperature);
    pintarFondo(temperature);

}

async function getClimaByCity(city,apiKey){
    const url = `${ UrlBase }?q=${ city }&appid=${ apiKey }`;
    const clima = await fetchApi(url);
    console.log(clima);
    document.querySelector('#left h2').innerHTML = clima.name;
    const temperature = (clima.main.temp-273.15).toFixed();
    pintaTemp(temperature);
    pintarFondo(temperature);
}

function pintaTemp(temp){
    const h3 = document.querySelector('h3');
    if(temp < 15){
       h3.innerHTML = `${ temp }° ❄️⛄`;
    }else if(temp < 22){
        h3.innerHTML = `${ temp }° 🌤️☁️`;
    }else{
        h3.innerHTML = `${ temp }° ☀️😎`;
    }
}

function pintarFondo(temp){
    const fondo=document.querySelector('body');
    if(temp < 15){
        fondo.style.background='#a8f3da';
    }else if(temp < 22){
        fondo.style.background-'#FFFF88';
    }else{
        fondo.style.background='#FFAB98';
    }
}

navigator.geolocation.getCurrentPosition(
    position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getClima(lat, lon, ApiKey);
    }
)

btnCiudad.addEventListener('click', ()=>{
    const city = inputCity.value;
    if (city){
        getClimaByCity(city,ApiKey);
    }
})