"use strict";
exports.__esModule = true;
var carClass_1 = require("./carClass");
{
}
function makeNewCar() {
    var type = document.getElementById('carType').value;
    var color = document.getElementById('color').value;
    var mpg = document.getElementById('mpg').value;
    var doors = document.getElementById('doors').value;
    var newCar = new carClass_1.Car(type, color, mpg, doors);
    console.log(newCar.toString());
}
