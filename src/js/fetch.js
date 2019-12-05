//funkcja odpowiada za pobranie danych następnie uruchamia callback
const getData = (url, callback) => {
    let data = fetch(url)
        .then(res => res.json())
        .then(res => {
            callback(res)
        })
        .catch(err => {
            alert("We cant find any result please check your input value")
        })
}

export default getData