$(document).ready(function(){
	$('#weatherwidget').hide();
    function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(getWeather);
        }else{
            alert("Geolocation not supported by this browser");
        }
    }

    function getWeather(position){
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        let API_KEY = '419a742127e2776af23034c031a3b8af';
        let baseURL = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`;

        $.get(baseURL,function(res){
            let data = res.current;
            let temp = Math.floor(data.temp - 273);
            let condition = data.weather[0].description;

            $('#temp-main').html(`${temp}°`);
            $('#condition').html(condition);
			$('#weatherwidget').show();
        })
        
    }

    getLocation();
})