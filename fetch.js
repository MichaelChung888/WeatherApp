//import { weatherIconMapping } from "./icons.js";
//import { changeMap } from "./map.js";

const arrowIcon = `<svg version="1.1" id="icons" xmlns="http://www.w3.org/2000/svg" height="36.95px" width="100%" x="0" y="0" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><style>.st0,.st1{display:none;fill:#191919}.st1,.st3{fill-rule:evenodd;clip-rule:evenodd}.st3,.st4{display:inline;fill:#191919}</style><g id="row1"><path id="nav:2_3_" d="M64 1 17.9 127 64 99.8l46.1 27.2L64 1zm0 20.4 32.6 89.2L64 91.3V21.4z" style="fill:#1b9cdd"/></g></svg>`

const precipitationIcon = `<svg xmlns="http://www.w3.org/2000/svg" margin="0" height="75px" width="100px" viewBox="0 0 200 200" xml:space="preserve"><path fill="#fff" d="M100.382 157.898c-20.1 0-36.4-17.1-36.4-38.2 0-24.4 32.7-75.5 33-76 .4-.6 1.4-2.2 3.2-2.2h.4c1.7 0 2.6.9 3.1 1.7.3.5 33 52.1 32.9 76.6 0 21-16.3 38.1-36.2 38.1zm.1-112.3c-.1.1-.1.2-.2.3-.3.5-32.3 50.9-32.3 73.8 0 18.9 14.5 34.2 32.3 34.2h.1c17.8 0 32.2-15.3 32.3-34.1 0-19.2-23-59.8-32.2-74.2z"/><path fill="#fff" d="M83.282 134.998c-.7 0-1.5-.4-1.8-1.1-2.3-4.9-3.5-10.2-3.5-15.7 0-13.3 10.4-35.2 19.2-51.2.5-1 1.7-1.3 2.7-.8s1.3 1.7.8 2.7c-12.2 22.3-18.7 39.4-18.7 49.3 0 5 1.1 9.6 3.1 13.9.5 1 .1 2.2-.9 2.7-.3.1-.6.2-.9.2z"/></svg>`

const humidityIcon = `<svg height="50px" width="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0066 3.25608C16.8483 2.85737 19.1331 2.8773 22.2423 3.65268C22.7781 3.78629 23.1038 4.32791 22.9699 4.86241C22.836 5.39691 22.2931 5.7219 21.7573 5.58829C18.8666 4.86742 16.9015 4.88747 15.4308 5.20587C13.9555 5.52524 12.895 6.15867 11.7715 6.84363L11.6874 6.89494C10.6044 7.55565 9.40515 8.28729 7.82073 8.55069C6.17734 8.82388 4.23602 8.58235 1.62883 7.54187C1.11607 7.33724 0.866674 6.75667 1.0718 6.24513C1.27692 5.73359 1.85889 5.48479 2.37165 5.68943C4.76435 6.6443 6.32295 6.77699 7.492 6.58265C8.67888 6.38535 9.58373 5.83916 10.7286 5.14119C11.855 4.45445 13.1694 3.6538 15.0066 3.25608Z" fill="#fff"/>
<path d="M22.2423 7.64302C19.1331 6.86765 16.8483 6.84772 15.0066 7.24642C13.1694 7.64415 11.855 8.44479 10.7286 9.13153C9.58373 9.8295 8.67888 10.3757 7.492 10.573C6.32295 10.7673 4.76435 10.6346 2.37165 9.67977C1.85889 9.47514 1.27692 9.72393 1.0718 10.2355C0.866674 10.747 1.11607 11.3276 1.62883 11.5322C4.23602 12.5727 6.17734 12.8142 7.82073 12.541C9.40515 12.2776 10.6044 11.546 11.6874 10.8853L11.7715 10.834C12.895 10.149 13.9555 9.51558 15.4308 9.19621C16.9015 8.87781 18.8666 8.85777 21.7573 9.57863C22.2931 9.71224 22.836 9.38726 22.9699 8.85275C23.1038 8.31825 22.7781 7.77663 22.2423 7.64302Z" fill="#fff"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.9998 10.0266C18.6526 10.0266 18.3633 10.2059 18.1614 10.4772C18.0905 10.573 17.9266 10.7972 17.7089 11.111C17.4193 11.5283 17.0317 12.1082 16.6424 12.7555C16.255 13.3996 15.8553 14.128 15.5495 14.8397C15.2567 15.5213 14.9989 16.2614 14.9999 17.0117C15.0006 17.2223 15.0258 17.4339 15.0604 17.6412C15.1182 17.9872 15.2356 18.4636 15.4804 18.9521C15.7272 19.4446 16.1131 19.9674 16.7107 20.3648C17.3146 20.7664 18.0748 21 18.9998 21C19.9248 21 20.685 20.7664 21.2888 20.3648C21.8864 19.9674 22.2724 19.4446 22.5192 18.9522C22.764 18.4636 22.8815 17.9872 22.9393 17.6413C22.974 17.4337 22.9995 17.2215 22.9998 17.0107C23.0001 16.2604 22.743 15.5214 22.4501 14.8397C22.1444 14.128 21.7447 13.3996 21.3573 12.7555C20.968 12.1082 20.5803 11.5283 20.2907 11.111C20.073 10.7972 19.909 10.573 19.8382 10.4772C19.6363 10.2059 19.3469 10.0266 18.9998 10.0266ZM20.6119 15.6257C20.3552 15.0281 20.0049 14.3848 19.6423 13.782C19.4218 13.4154 19.2007 13.0702 18.9998 12.7674C18.7989 13.0702 18.5778 13.4154 18.3573 13.782C17.9948 14.3848 17.6445 15.0281 17.3878 15.6257L17.3732 15.6595C17.1965 16.0704 16.9877 16.5562 17.0001 17.0101C17.0121 17.3691 17.1088 17.7397 17.2693 18.0599C17.3974 18.3157 17.574 18.5411 17.8201 18.7048C18.06 18.8643 18.4248 19.0048 18.9998 19.0048C19.5748 19.0048 19.9396 18.8643 20.1795 18.7048C20.4256 18.5411 20.6022 18.3156 20.7304 18.0599C20.8909 17.7397 20.9876 17.3691 20.9996 17.01C21.0121 16.5563 20.8032 16.0705 20.6265 15.6597L20.6119 15.6257Z" fill="#fff"/>
<path d="M14.1296 11.5308C14.8899 11.2847 15.4728 12.076 15.1153 12.7892C14.952 13.1151 14.7683 13.3924 14.4031 13.5214C13.426 13.8666 12.6166 14.3527 11.7715 14.8679L11.6874 14.9192C10.6044 15.5799 9.40516 16.3115 7.82074 16.5749C6.17735 16.8481 4.23604 16.6066 1.62884 15.5661C1.11608 15.3615 0.866688 14.7809 1.07181 14.2694C1.27694 13.7578 1.8589 13.509 2.37167 13.7137C4.76436 14.6685 6.32297 14.8012 7.49201 14.6069C8.67889 14.4096 9.58374 13.8634 10.7286 13.1654C11.8166 12.5021 12.9363 11.9171 14.1296 11.5308Z" fill="#fff"/>
</svg>
`

const rainIcon = `<svg height="55px" width="100px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M700.6 188.2c-58.4 0-110.4 31.3-144.2 80.1-21.4-32.7-55.3-53.9-93.6-53.9-58 0-106.1 48.5-115.4 112h-44.9c-68.5 0-123.9 63.7-123.9 142.3 0 78.6 55.5 142.3 123.9 142.3h398.1c101.7 0 184.1-94.6 184.1-211.3 0-116.9-82.4-211.5-184.1-211.5z" fill="#FFFFFF" /><path d="M700.6 164.7c-54.6 0-106 24.6-144.2 68.2-25.3-27-58.3-42-93.6-42-61.6 0-114.6 46.1-131.9 112h-28.4c-79.8 0-144.7 74.4-144.7 165.8s64.9 165.7 144.7 165.7h398.1c113 0 204.9-105.3 204.9-234.8 0-129.6-91.9-234.9-204.9-234.9z m0 422.7H302.5c-56.9 0-103.2-53.3-103.2-118.8s46.3-118.8 103.2-118.8h44.9c10.2 0 18.8-8.3 20.5-19.6 7.8-53.5 47.8-92.4 94.9-92.4 30.5 0 58.5 16.2 76.9 44.4 3.9 5.9 9.9 9.4 16.4 9.5 6.1 0 12.6-3.2 16.6-9 31.3-45.2 77.8-71.1 127.8-71.1 90.1 0 163.4 84.3 163.4 187.9 0.1 103.6-73.2 187.9-163.3 187.9zM286.9 688.4L163.8 829.3c-8.1 9.2-8 24.1 0.2 33.2 4 4.5 9.3 6.8 14.6 6.8 5.4 0 10.7-2.3 14.8-7l123.1-140.9c8.1-9.2 8-24.1-0.2-33.2-8.2-9.2-21.4-9.1-29.4 0.2zM478.2 688.2c-8.2-9.1-21.3-9-29.4 0.2l-61.5 70.4c-8.1 9.2-8 24.1 0.2 33.2 4 4.5 9.3 6.8 14.6 6.8 5.4 0 10.7-2.3 14.8-7l61.5-70.4c8.1-9.3 8-24.1-0.2-33.2zM775.3 688.4l-61.5 70.4c-8.1 9.2-8 24.1 0.2 33.2 4 4.5 9.3 6.8 14.6 6.8 5.4 0 10.7-2.3 14.8-7l61.5-70.4c8.1-9.2 8-24.1-0.2-33.2-8.2-9.2-21.3-9.1-29.4 0.2zM613.5 688.4L490.4 829.3c-8.1 9.2-8 24.1 0.2 33.2 4 4.5 9.3 6.8 14.6 6.8 5.4 0 10.7-2.3 14.8-7l123-140.9c8.1-9.2 8-24.1-0.2-33.2-8.1-9.2-21.3-9.1-29.3 0.2z" fill="#fff" /></svg>`;

const visibilityIcon = `<svg height="55px" width="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

const cloudinessIcon = `<svg height="55px" width="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 13.6493C3 16.6044 5.41766 19 8.4 19L16.5 19C18.9853 19 21 16.9839 21 14.4969C21 12.6503 19.8893 10.9449 18.3 10.25C18.1317 7.32251 15.684 5 12.6893 5C10.3514 5 8.34694 6.48637 7.5 8.5C4.8 8.9375 3 11.2001 3 13.6493Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

const apiKey = "c146e1932e9071b367bdd296b9ca5296";

async function fetchWeatherData(location=null, LatLon=null) {
    let apiUrl = "";

    if (location){ apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`;}
    else if (LatLon) apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${LatLon[0]}&lon=${LatLon[1]}&appid=${apiKey}&units=metric`;

    document.querySelector(".transition").classList.add("loading");
    await fetch(apiUrl).then(response => response.json()).then(async data => {

        const todayWeather = data.list[0];
        const todayTemperature = `${Math.round(todayWeather.main.temp)}<span class="today-temperature-span">°C</span>`;
        const todayWeatherIconCode = todayWeather.weather[0].icon;
        const todayDescription = todayWeather.weather[0].description;
        const todayDay = (new Date(todayWeather.dt_txt)).toLocaleDateString('en', { weekday: 'long'})
        const {lat, lon} = data.city.coord;

        /*
        const airURL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
        await fetch(airURL).then(response => response.json()).then(data => {
            console.log(data);
        });
        */

        changeMap(lat, lon);

        document.querySelector(".today-city").textContent = `${data.city.name}, ${data.city.country}`;
        document.querySelector(".today-date").textContent = new Date().toLocaleDateString('en', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
        document.querySelector(".today-temperature").innerHTML = todayTemperature;
        document.querySelector(".today-desc").innerHTML = todayDescription[0].toUpperCase() + todayDescription.slice(1);
        document.querySelector(".today .element").innerHTML = weatherIconMapping[todayWeatherIconCode];

        //CONDITION

        const conditions = document.querySelector(".condition");
        conditions.innerHTML = "";

        conditions.innerHTML += `
        <div class="condition-item-inner" style="margin-top: 0;">
            ${precipitationIcon}
            <div class="condition-item-inner2">
                <p style="color: var(--text2)">Precipitation</p>
                <h2>${todayWeather.pop} %</h2>
            </div>
        </div>
        `

        conditions.innerHTML += `
        <div class="condition-item-inner">
            ${humidityIcon}
            <div class="condition-item-inner2">
                <p style="color: var(--text2)">Humidity</p>
                <h2>${todayWeather.main.humidity} %</h2>
            </div>
        </div>
        `

        conditions.innerHTML += `
        <div class="condition-item-inner">
            ${rainIcon}
            <div class="condition-item-inner2">
                <p style="color: var(--text2)">Rain volume(3hr)</p>
                <h2>${todayWeather.rain ? todayWeather.rain["3h"] : 0} mm</h2>
            </div>
        </div>
        `

        conditions.innerHTML += `
        <div class="condition-item-inner">
            ${visibilityIcon}
            <div class="condition-item-inner2">
                <p style="color: var(--text2)">Visibility</p>
                <h2>${Math.round(todayWeather.visibility / 1000)} km</h2>
            </div>
        </div>
        `

        conditions.innerHTML += `
        <div class="condition-item-inner">
            ${cloudinessIcon}
            <div class="condition-item-inner2">
                <p style="color: var(--text2)">Cloudiness</p>
                <h2>${todayWeather.clouds.all} %</h2>
            </div>
        </div>
        `



        //TODAY FORECAST
        const todayForecast = document.querySelector(".today-forecast ul");
        todayForecast.innerHTML = "";
        data.list.slice(0, 10).forEach(dayInfo => {
            const date = new Date(dayInfo.dt_txt);
            const time = date.toLocaleTimeString("en-US");
            todayForecast.innerHTML += `
            <li>
                <div class="item">
                    <p>${time.split(":")[0]} ${time.split(" ")[1]}</p>
                    <div class="element">${weatherIconMapping[dayInfo.weather[0].icon]}</div>
                    <p class="today-forecast-temperature">${Math.round(dayInfo.main.temp)}°</p>
                </div>
                <div class="item">
                    <p>${time.split(":")[0]} ${time.split(" ")[1]}</p>
                    <div class="element" style="transform: rotate(${dayInfo.wind.deg}deg);">${arrowIcon}</div>
                    <p class="today-forecast-temperature">${Math.round(dayInfo.wind.speed)} m/s</p>
                </div>
            </li>
            `
        });



        //NEXT DAY FORECAST
        let count = 1;
        let maxTemp = null;
        let minTemp = null;
        let prevDay = todayDay;
        let day = null;

        while(todayDay === prevDay) {
            count++;
            prevDay = (new Date(data.list[count].dt_txt)).toLocaleDateString('en', { weekday: 'long'});
        }

        document.querySelector(".next-days-forecast ul").innerHTML = "";
        data.list.slice(count+1).forEach(dayInfo => {
            day = (new Date(dayInfo.dt_txt)).toLocaleDateString('en', { weekday: 'long'});
            if (prevDay !== day) {
                document.querySelector(".next-days-forecast ul").innerHTML +=  `
                                <li>
                                    <p class="center">${prevDay}</p>
                                    <div class="center element">${weatherIconMapping[data.list[count - 4].weather[0].icon]}</div>
                                    <p class="next-day-forecast-temperature center">${Math.round(maxTemp)}° / ${Math.round(minTemp)}°</p>
                                </li>
                                `
                maxTemp = null;
                minTemp = null;
            }
            maxTemp = (dayInfo.main.temp_max > maxTemp || maxTemp == null) ? dayInfo.main.temp_max : maxTemp;
            minTemp = (dayInfo.main.temp_min < minTemp || minTemp == null) ? dayInfo.main.temp_min : minTemp;
            prevDay = day;
            count++;
        });

    }).catch(error => {
        console.log(error);
        alert("Unknown location, try again.");
    });

    document.querySelector(".transition").classList.remove("loading")
    //setTimeout(() => document.querySelector(".transition").classList.remove("loading"), 500);
}