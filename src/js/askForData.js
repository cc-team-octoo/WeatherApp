import getData from "./fetch.js"
import showWeather from "./showWeather"
import showCurrentWeather from "./showCurrentWeather"

const apiKey = `4e687fa0129ef13f04e5dac8867f62ca`
const askForData = (inputType = "City", inputValue = "", secondInputValue = "", countryCode) => {
  if (!inputValue) {
    alert("Input cannot be empty")
    return
  }
  switch (inputType) {
    case 'City':
      getData(`http://api.openweathermap.org/data/2.5/forecast?q=${inputValue},${countryCode.toLowerCase()}&appid=${apiKey}&units=metric`, showWeather)
      getData(`http:/api.openweathermap.org/data/2.5/weather?q=${inputValue},${countryCode.toLowerCase()}&appid=${apiKey}&units=metric`, showCurrentWeather)
      break;
    case 'ZipCode':
      getData(`http://api.openweathermap.org/data/2.5/forecast?zip=${inputValue},${countryCode.toLowerCase()}&appid=${apiKey}&units=metric`, showWeather)
      getData(`http://api.openweathermap.org/data/2.5/weather?zip=${inputValue},${countryCode.toLowerCase()}&appid=${apiKey}&units=metric`, showCurrentWeather)
      break;
    case 'Geo':
      if (!secondInputValue) {
        alert("Inputs cannot be empty")
        return
      }
      getData(`http://api.openweathermap.org/data/2.5/forecast?lat=${inputValue}&lon=${secondInputValue}&appid=${apiKey}&units=metric`, showWeather)
      getData(`http:api.openweathermap.org/data/2.5/weather?lat=${inputValue}&lon=${secondInputValue}&appid=${apiKey}&units=metric`, showCurrentWeather)
      break;
    case '':
      //gets data by geo coordinates in rectangle
      getData(`http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=${apiKey}&units=metric`, showCurrentWeather)
      break;
    case 'Circle':
      //gets data by geo coordinates in circle
      getData(`http://api.openweathermap.org/data/2.5/find?lat=${inputValue}&lon=${secondInputValue}&cnt=10&appid=${apiKey}&units=metric`, showCurrentWeather)
      break;
    default:
      console.log('test - something went wrong rly rly wrong ');
  }
}

export default askForData