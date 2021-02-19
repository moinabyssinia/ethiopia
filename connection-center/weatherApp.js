const tempDOM = document.querySelector("#temp")
const weatherIcon = document.querySelector('img');

function weatherBalloon( cityID ) {
    var key = 'a8353329c6bbbccb6f45a86e43d49b1d';
    const temp = fetch('https://api.openweathermap.org/data/2.5/weather?id=' 
        + cityID+ '&units=imperial' + '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        getWeather(data);
        getIcon(data);
    })
    .catch(function() {
        // catch any errors
    });
}
function getWeather(data){
        const fahrenheit = Math.round(data.main.temp);
        tempDOM.innerHTML = fahrenheit+'&deg';
    }

//get icon
const getIcon = (data) => {
    const iconText = data.weather[0].icon;
    console.log(iconText);
    weatherIcon.src = `http://openweathermap.org/img/w/${iconText}.png`;
    //weatherIcon.src = `http://openweathermap.org/img/w/03d.png`;
}

const temperature = weatherBalloon(4167147);