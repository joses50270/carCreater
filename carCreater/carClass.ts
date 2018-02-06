export interface newCar{
    incomingCarType: any,
    incomingDoors: any,
    incomingMpg: any,
    incomingColor: string,
}
export class Car {
    color: any;
    carType: string;
    doors: any;
    mpg: any;

    constructor(labelledObj: newCar) {
        this.color = labelledObj.incomingColor;
        this.carType = labelledObj.incomingCarType;
        this.doors = labelledObj.incomingDoors;
        this.mpg = labelledObj.incomingMpg
     }
  }
