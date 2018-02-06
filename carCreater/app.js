"use strict";
exports.__esModule = true;
var Vehicle = require("./carClass");
document.getElementById("submit").onclick = function () { makeNewCar(); };
function makeNewCar() {
    var type = document.getElementById('carType').value;
    var color = document.getElementById('color').value;
    var mpg = document.getElementById('mpg').value;
    var doors = document.getElementById('doors').value;
    var carObject = {
        incomingDoors: doors,
        incomingMpg: mpg,
        incomingCarType: type,
        incomingColor: color
    };
    var newCar = new Vehicle.Car(carObject);
    console.log(newCar);
}
