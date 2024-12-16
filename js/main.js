let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("Find");
let city;
let da;
searchInput.addEventListener("input", function () {
    console.log(searchInput.value)
    days(searchInput.value)
});

days("alexandria");
async function days(country) {
    let response = await fetch(` http://api.weatherapi.com/v1/forecast.json?key=3577f5fa0194483fbe0201550241312&q=${country}&days=3`);
    if (response.ok) {
        let data = await response.json();
        console.log("days", data);
        console.log("days", data.current);
        console.log("days", data.location);
        console.log(data.forecast.forecastday[0].day.avgtemp_c);
        console.log(data.forecast.forecastday[0].day.condition.text);
        console.log(data.forecast.forecastday[0].day.condition.icon);
        console.log(data.forecast.forecastday[0].day)
        console.log(data.forecast.forecastday[0].day.condition.maxwind_kph);
        console.log(data.forecast.forecastday[0].date);
        console.log("days", data.current.condition)
        date = data.forecast;
        city=data.location;
        da=data.current


       
        displayData(date);
    }
}

function displayData(arr) {
    let cartona = "";
    for (let i = 0; i < arr.forecastday.length; i++) {
        const date = new Date(arr.forecastday[i].date); // Replace with your date
        const options = { weekday: 'long' };
        const dayName = date.toLocaleDateString('en-US', options);
        
        console.log(dayName); 
        
        cartona += `
                <div class="card text-bg-secondary mb-5  col-md-12 col-lg-4 ">
                    <div class="card-header d-flex justify-content-between"> <span>${dayName}</span> ${arr.forecastday[i].date}</div>
                    <div class="card-body">
                        <p>${city.name || city.country}</p>
                        <h5 class="card-title">${arr.forecastday[i].day.avgtemp_c} °C </h5>
                        
                       <img src="https:${arr.forecastday[i].day.condition.icon}" alt="">
                        <p class="card-text">${arr.forecastday[i].day.condition.text}</p>
                        <p><img src="image/icon-wind.png" alt="">${arr.forecastday[i].day.maxwind_kph}km/h <img src="image/icon-compass.png" alt=""> ${da.wind_dir}</p>                        
                       
                    </div>
                </div>
          
        `


        
        
    }
    document.getElementById("rowTemperature").innerHTML = cartona;

}

