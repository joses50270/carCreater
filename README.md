# carCreater
The challenge is to create a program with TypeScript that would take in the users input for their ideal car and then have the console return what the user wrote

# The Algorithm
The way this code works is that there is an interface and class which provides the blueprints for the car the user will create. Those bluepirnts are then exported to a typescript file to be used later. In the HTML you take in the users input for their car. Each tag is linked to their respective car feature. Once all input boxes are filled the user would then press the submit button. This submit button is linked to a typescript function which will activite on click. That function, newCar(), gets the value of each input and places them into thier respective variables. Then those same variables are put into an object. That object is then put into another variable which will be console.logged along with a class previously made. Once console.logged the users input will be shown in the console.
