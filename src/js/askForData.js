import getData from "./fetch.js"
import showWeather from "./showWheater"
import showCurrentWeather from "./showCurrentWeather"

const apiKey=`4e687fa0129ef13f04e5dac8867f62ca`
const askForData = (inputType="Circle",inputValue="") => {
    //za input Type wstawiamy z czego pobieramy input Value to value inputa
    //możba sobie potestować wstawiając za input Type City, ZipCode, Geo
    switch (inputType) {
        case 'City':
            //pobiera pod względem miasta
                getData(`http://api.openweathermap.org/data/2.5/forecast?q=London&appid=${apiKey}`,showWeather)
                getData(`http:/api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`,showCurrentWeather);

          break;
        case 'ZipCode':
            //pobiera po kodzie
               getData(`http://api.openweathermap.org/data/2.5/forecast?zip=61-222,pl&appid=${apiKey}`,showWeather)
                getData(`http://api.openweathermap.org/data/2.5/weather?zip=61-222,pl&appid=${apiKey}`,showCurrentWeather)
              

                break;
          case 'Geo':
              //pobiera po współrzędnych
                getData(`http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=${apiKey}`,showWeather)
                getData(`http:api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${apiKey}`,showCurrentWeather)
          break;
            case 'Rectangle':
              //pobiera po obszarze miast (kwadrat koordynaty geograficzne)
                getData(`http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=${apiKey}`,showCurrentWeather)
          break;
          case 'Circle':
              //pobiera po obszarze miast (okrąg- koordynaty geograficzne)
                getData(`http://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10&appid=${apiKey}`,showCurrentWeather)
          break;
        default:
          console.log('test - something go wrong rly rly wrong ');
      }
         
            
        }

export default askForData
