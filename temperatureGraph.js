// Poniższy element powinien zostać dodany do HTML.
// <div id="openweathermap-widget-12"></div>

// cityId to jest string
function temperatureGraph(cityId) {
    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
    window.myWidgetParam.push({
        id: 12,
        cityid: cityId,
        appid: '4e687fa0129ef13f04e5dac8867f62ca',
        units: 'metric',
        containerid: 'openweathermap-widget-12',
    });
    (function () {
        var script = document.createElement('script');
        script.async = true;
        script.charset = "utf-8";
        script.src =
            "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);
    })();
}