import { Car } from './carClass';

class NewCar extends Car{
  constructor(doors: any, color: string, carType: string, mpg: any,){
   super(doors, color, carType, mpg)

  }
}

function printCar(){
  let door = (<HTMLInputElement>document.getElementById('doors')).value;
  let doorNumber = 
}