var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here
// console.log(apiResult);
        
 var city = apiResult.name;
 var weather = apiResult.main;
 console.log(weather);
    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=33175,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();

var city_name = document.getElementById('cityname');
var temp = document.getElementById('temp');
var button = document.getElementById('button');
var button2 = document.getElementById('button2');


function toggleDropdown() {
    city_name.classList.toggle('show');
    temp.classList.toggle('show');
}
button.addEventListener('click',toggleDropdown);
button2.addEventListener('click',toggleDropdown);

