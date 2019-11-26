//calback do fetcha - tutaj trzeba będzie powstawiać elementy domu
function showWheater(arg){
    console.log(arg) //całe dane już przerobione z json 
    console.log(arg.city) // miasto jakie wyszukało
    console.log(arg.list) // lista "pogód" na najbliższy czas
    }

export default showWheater
