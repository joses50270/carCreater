(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./carClass":2}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(incomingDoors, incomingColor, incomingCarType, incomingMpg) {
        this.doors = incomingDoors;
        this.color = incomingColor;
        this.carType = incomingCarType;
        this.mpg = incomingMpg;
    }
    return Car;
}());
exports.Car = Car;

},{}]},{},[1]);
