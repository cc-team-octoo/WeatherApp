function getDaysNames() {
    const today = new Date();
    const weekDay = today.getDay();
    let todays = weekDay;
    const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const daysNames = [];

    for (let i = 0; i < 5; i++) {
        if (todays > 6) {
            todays = 0
        }
        daysNames.push(dayName[todays])
        todays++;
    }
    return daysNames
}

function getDates() {
    const today = new Date();
    const tomorrow = new Date(today)
    const dates = []

    for(let i=0; i<=4; i++) {
        tomorrow.setDate(tomorrow.getDate() + 1)
        dates.push(`${tomorrow.getDate()}.${tomorrow.getMonth()+1}`)
    }
    return dates
}

function displayDates() {
    const daysNames = getDaysNames();
    const dates = getDates();
    const daysNamesDisplay = document.querySelectorAll('.js_day');
    const datesDisplay = document.querySelectorAll('.js_date');
    for(let i=0; i<=4; i++){
        daysNamesDisplay[i].textContent = daysNames[i];
        datesDisplay[i].textContent = dates[i];
    }
}

export default displayDates;