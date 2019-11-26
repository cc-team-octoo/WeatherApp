import getData from "./fetch.js"
import showWheater from "./showWheater"

const apiKey=`4e687fa0129ef13f04e5dac8867f62ca`
const askForData = (inputType="ZipCode",inputValue="") => {
    //za input Type wstawiamy z czego pobieramy input Value to value inputa
    //możba sobie potestować wstawiając za input Type City, ZipCode, Geo
    switch (inputType) {
        case 'City':
            //pobiera pod względem miasta
                getData(`http://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=${apiKey}`,showWheater)
          break;
        case 'ZipCode':
            //pobiera po kodzie
                getData(`http://api.openweathermap.org/data/2.5/forecast?zip=61-222,pl&appid=${apiKey}`,showWheater)
                break;
          case 'Geo':
              //pobiera po współrzędnych
                getData(`http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=${apiKey}`,showWheater)
          break;
        default:
          console.log('test');
      }
         
            
        }

export default askForData
