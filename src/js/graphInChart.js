// <!DOCTYPE html>
//     <html lang = "en" >

//     <head >
//     <meta charset = "UTF-8" >
//     <meta name = "viewport"
// content = "width=device-width, initial-scale=1.0" >
//     <meta http - equiv = "X-UA-Compatible"
// content = "ie=edge" >
//     <title > Document </title> </head>

//     <body >
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
    // <canvas id = "line-chart"
    //         width = "800"
    //         height = "450"></canvas>
    // <script>
const dateGraph = [];
const tempGraph = [];

fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=Poznan,PL&units=metric&appid=4e687fa0129ef13f04e5dac8867f62ca"
    )
    .then(resp => resp.json())
    .then(resp => {
        // console.log(resp.list[0]);

        resp.list.forEach((element, index) => {
            if (index % 10 == 0) {
                dateGraph.push(element.dt_txt);
                tempGraph.push(element.main.temp_max);
                new Chart(document.getElementById("line-chart"), {
                    type: 'line',
                    data: {
                        labels: testowa,
                        datasets: [{
                            data: tempGraph,
                            label: "",
                            borderColor: "#3e95cd",
                            fill: false
                        }]
                    },
                    options: {
                        title: {
                            display: true,
                            text: 'Wykres temperatury'
                        }
                    }
                });
            }
        });
    })

//<script> <
// /body>

// <
// /html>