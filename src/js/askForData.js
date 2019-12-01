import getData from "./fetch.js"
import showWeather from "./showWeather"
import showCurrentWeather from "./showCurrentWeather"

const apiKey=`4e687fa0129ef13f04e5dac8867f62ca`
const askForData = (inputType="Circle",inputValue="") => {
    //za input Type wstawiamy z czego pobieramy input Value to value inputa
    //możba sobie potestować wstawiając za input Type City, ZipCode, Geo
    switch (inputType) {
      case 'City':
        //pobiera pod względem miasta
        getData(`http://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid=${apiKey}&units=metric`,showWeather)
        getData(`http:/api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`,showCurrentWeather)
        break;
      case 'ZipCode':
        //pobiera po kodzie
        getData(`http://api.openweathermap.org/data/2.5/forecast?zip=${inputValue},pl&appid=${apiKey}&units=metric`,showWeather)
        getData(`http://api.openweathermap.org/data/2.5/weather?zip=${inputValue},pl&appid=${apiKey}&units=metric`,showCurrentWeather)
        break;
      case 'Geo':
        //pobiera po współrzędnych
        getData(`http://api.openweathermap.org/data/2.5/forecast?lat=${inputValue}&lon=${inputValue}&appid=${apiKey}&units=metric`,showWeather)
        getData(`http:api.openweathermap.org/data/2.5/weather?lat=${inputValue}&lon=${inputValue}&appid=${apiKey}&units=metric`,showCurrentWeather)
        break;
      case 'Rectangle':
        //pobiera po obszarze miast (kwadrat koordynaty geograficzne)
        getData(`http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=${apiKey}&units=metric`,showCurrentWeather)
        break;
      case 'Circle':
        //pobiera po obszarze miast (okrąg- koordynaty geograficzne)
        getData(`http://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10&appid=${apiKey}&units=metric`,showCurrentWeather)
        break;
      default:
        console.log('test - something went wrong rly rly wrong ');
      }
         
            
        }

export default askForData
