import { Car } from './carClass';
import * as Vehicle from './carClass'

(<HTMLInputElement>document.getElementById("submit")).onclick = function () { makeNewCar() };

function makeNewCar() {
  let type = (<HTMLInputElement>document.getElementById('carType')).value
  let color = (<HTMLInputElement>document.getElementById('color')).value
  let mpg = (<HTMLInputElement>document.getElementById('mpg')).value
  let doors = (<HTMLInputElement>document.getElementById('doors')).value

  let carObject = {
    incomingDoors: doors,
    incomingMpg: mpg,
    incomingCarType: type,
    incomingColor: color
  }
  let newCar = new Vehicle.Car(carObject)
  console.log(newCar)
}