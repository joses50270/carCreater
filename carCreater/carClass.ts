export class Car {
    doors: any;
    color: string;
    carType: string;
    mpg: any;

    constructor(incomingDoors: number, incomingColor: string, incomingCarType: string, incomingMpg: number, ) {
       this.doors = incomingDoors;
       this.color = incomingColor;
       this.carType = incomingCarType;
       this.mpg = incomingMpg;
    }
}