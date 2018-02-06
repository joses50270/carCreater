import { Car } from './carClass';


function makeNewCar() {
  let type =(<HTMLInputElement> document.getElementById('carType')).value
  let color =(<HTMLInputElement> document.getElementById('color')).value
  let mpg = (<HTMLInputElement> document.getElementById('mpg')).value
  let doors = (<HTMLInputElement> document.getElementById('doors')).value



  let newCar = new Car(type, color, mpg, doors)
  console.log(newCar.toString())
}