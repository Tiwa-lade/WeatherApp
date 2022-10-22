let search = document.querySelector(".search");
let button = document.querySelector("button");
let city = document.getElementById("location");
let date = document.getElementById("date");
let weaTher = document.getElementById("weather");
let lgLt = document.getElementById("lg-lt");
let temp= document.getElementById("degree")

button.addEventListener("click",() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + search.value + '&units=metric&appid=d27164ed1dc7f417c18c8766592514d6')
            .then(resource => resource.json())
            .then(data => {
                    city.innerHTML = `${data.name}, ${data.sys.country}`;
                    temp.innerHTML = `${data.main.temp}`;
                    weaTher.innerHTML = `${data.weather[0].main}`;
                    lgLt.innerHTML = `${data.coord.lat}, ${data.coord.lon}`;

                console.log(data)
            })
            .catch(err => console.log(err));

    })

