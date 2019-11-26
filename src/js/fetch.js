//funkcja odpowiada za pobranie danych następnie uruchamia callback
const getData =(url,callback)=>{
let data=fetch(url)
.then(res=>res.json())
//.then(res=>console.log(res))
.then((res)=>{callback(res)})
}

export default getData
