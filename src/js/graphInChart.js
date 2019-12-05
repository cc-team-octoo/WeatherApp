function graphInChart(city) {

    const dateGraph = [];
    const tempGraph = [];

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=4e687fa0129ef13f04e5dac8867f62ca`
            // `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=4e687fa0129ef13f04e5dac8867f62ca&units=metric`
            // Poniżej oryginalny link
        )
        .then(resp => resp.json())
        .then(resp => {

            resp.list.forEach((element, index) => {
                if (index % 10 == 0) {
                    dateGraph.push(element.dt_txt);
                    tempGraph.push(element.main.temp_max);
                    new Chart(document.getElementById("line-chart"), {
                        type: 'line',
                        data: {
                            labels: dateGraph,
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
                                text: 'temperature graph'
                            }
                        }
                    });
                }
            });
        })
        .catch(err => {
            console.log("err")
        })
}

export default graphInChart;