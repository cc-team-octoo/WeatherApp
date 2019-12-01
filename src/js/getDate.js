function getDate() {
    const dayName = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const monthName = ["January ", "February", "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    const today = new Date();
    const weekDay = today.getDay();
    const month = today.getMonth();
    const day = today.getDate();
    const year = today.getFullYear();
    const todayNameAndFourNextDay = [];
    let todays = weekDay;
    const dateDescription = `Today is ${dayName[weekDay]}, ${day} ${monthName[month]} ${year}`;
    const dateToday = `Today is ${day}.${month + 1}`;

    console.log(dateToday);
    for (let i = 0; i < 5; i++) {
        if (todays > 6) {
            todays = 0
        }

        todayNameAndFourNextDay.push(dayName[todays])
        todays++;
    }
    return {
        todayNameAndFourNextDay,
        dateDescription,
        dateToday
    }
}