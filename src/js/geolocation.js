//import funkcji z fatchem
import getData from "./fetch.js"
//funkcja pomocnicza działająca jako callback dla fetcha - nie wiem jakie elementy mam łapać w query selector i na nich operować
import showWheater from "./showWheater"

const apiKey=`4e687fa0129ef13f04e5dac8867f62ca`
const geolocation = () => {
    let userPosition={};
 const getUserPostion=window.navigator.geolocation.getCurrentPosition(
       (position) => {
            userPosition={
                latitude:position.coords.latitude,
                longitude:position.coords.longitude,
            }
         
                
            console.log("--Geolocation - fetch from user")
            getData(`http://api.openweathermap.org/data/2.5/forecast?lat=${userPosition.latitude}&lon=${userPosition.longitude}&appid=${apiKey}`,showWheater)
            getData(`http:api.openweathermap.org/data/2.5/weather?lat=${userPosition.latitude}&lon=${userPosition.longitude}&appid=${apiKey}`,showCurrentWeather)
            console.log("--------")
        },
        (error) => console.log(error, "Please allow to share your location")
)
}
export default geolocation
