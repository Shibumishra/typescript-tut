export { }

enum Days {
    mon = "mon", tue = "tue", wed = "wed", thu = "thu", fir = "fir", sat = "sat", sun = "sun"
}

function whichDay(day: Days) {
    return day
}

var days = whichDay(Days.sat);

console.log(days);