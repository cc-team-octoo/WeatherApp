export function mostCommon(array) {
    let counts = {}
    let compare = 0;
    let mostFrequent;
    array.forEach((e) => {
        let word = e;
        if (counts[word] === undefined) {
            counts[word] = 1;
        } else {
            counts[word] = counts[word] + 1;
        }
        if (counts[word] > compare) {
            compare = counts[word];
            mostFrequent = e;
        }

    })
    return mostFrequent
}
//compare function - this will help with gets max and min temp
export function compareTemp(arg, param) {
    let compareArray = []
    if (param === "max") {
        arg.map((e) => {
            compareArray.push(e.tempMax)
        })
    }
    if (param === "min") {
        arg.map((e) => {
            compareArray.push(e.tempMin)
        })
    }
    if (param === "avg") {
        arg.map((e) => {
            compareArray.push(e.tempAvg)
        })
    }
    if (param === "logo") {
        arg.map((e) => {
            compareArray.push(e.icon)
        })
    }
    if (param === "desc") {
        arg.map((e) => {
            compareArray.push(e.desc)
        })
    }
    if (param === "time") {
        arg.map((e) => {
            compareArray.push(e.time)
        })
    }
    return compareArray
}