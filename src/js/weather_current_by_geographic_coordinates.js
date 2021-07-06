function weather_current_by_geographic_coordinates(latitude, longitude) {
    // const latitude = 52.4069200;
    // const longitude = 16.9299300;
    const apiKey = '4e687fa0129ef13f04e5dac8867f62ca';

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`)
        .then(res => res.json())
        .then(res => {
            console.log(res);

        });
};