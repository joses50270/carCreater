export class Car {
    doors: any;
    color: any;
    carType: string;
    mpg: any;

    constructor(incomingDoors: any, incomingColor: any, incomingCarType: string, incomingMpg: any, ) {
        this.doors = incomingDoors;
        this.color = incomingColor;
        this.carType = incomingCarType;
        this.mpg = incomingMpg;
    }
}