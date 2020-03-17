const weather = document.querySelector(".js-weather");

const API_KEY = "747a46fca8b9eab88c31c57f5b2539cc";
const COORDS = "coords";

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
    ).then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });

}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const lognitude = position.coords.lognitude;

    //변수 이름과 객체의 key 이름이 같을 경우 latitude: latitude 대신 latitude만 써도 가능
    const coordsObj = {
        latitude,
        lognitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, lognitude);
}

function handleGeoError(){
    console.log("Cant access geo location");
}

function askForCoords(){
    /*
    첫번째 인자는 좌표를 가져오는데 성공했을 때 처리하는 함수
    두번째 인자는 좌표를 가져오는데 실패했을 때 처리하는 함수
    */
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        console.log(parseCoords);
        //getWeather(parseCoords.latitude, parseCoords.lognitude);
    }
}

function init(){
    loadCoords();
}

init();