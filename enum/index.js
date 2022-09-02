"use strict";
exports.__esModule = true;
var Days;
(function (Days) {
    Days["mon"] = "mon";
    Days["tue"] = "tue";
    Days["wed"] = "wed";
    Days["thu"] = "thu";
    Days["fir"] = "fir";
    Days["sat"] = "sat";
    Days["sun"] = "sun";
})(Days || (Days = {}));
function whichDay(day) {
    return day;
}
var days = whichDay(Days.sat);
console.log(days);
