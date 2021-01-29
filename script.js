// http://api.weatherapi.com/v1/current.json?key=e17828c1a65841b2b31171955212501&q=London



const searchBtn = document.getElementById('searchBtn');


searchBtn.addEventListener('click', function () {

    function getWeather() {
        const cityName = document.getElementById('inputCityName').value;

        if (!cityName) {
            alert('type a city name here')
        }

        else {
            fetch(`http://api.weatherapi.com/v1/current.json?key=e17828c1a65841b2b31171955212501&q=${cityName}`)
                .then(res => res.json())
                .then(data => {
                    // update city name 
                    const updateCityName = data.location.name;
                    document.getElementById('cityName').innerText = updateCityName;

                    // update icon
                    const updateCurrentIcon = data.current.condition.icon;
                    document.getElementById('icon').src = updateCurrentIcon

                    // update temperature 

                    const updateTemperature = data.current.temp_c;
                    document.getElementById('temp').innerText = updateTemperature;

                    // condition update 

                    const condition = data.current.condition.text;
                    document.getElementById('condition').innerText = condition;

                })
                
        }

    }

    getWeather()
})


