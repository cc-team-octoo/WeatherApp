function getDate() {
    const dayName = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];
    const monthName = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia",
        "września", "października", "listopada", "grudnia"
    ];
    var today = new Date();
    var weekDay = today.getDay();
    var month = today.getMonth();
    var day = today.getDate();
    var year = today.getFullYear();
    var todayNameAndFourNextDay = [];
    let todays = weekDay;
    const dateDescription = `Dzisiaj jest ${dayName[weekDay]}, ${day} ${monthName[month]} ${year}`;

    for (let i = 0; i < 5; i++) {
        if (todays > 6) {
            todays = 0
        }

        todayNameAndFourNextDay.push(dayName[todays])
        todays++;
    }
    return {
        todayNameAndFourNextDay,
        dateDescription
    }
}