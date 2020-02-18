# Mars-Rover-Kata-Prework-Ironhack
Iteration 1 | The Rover Object
Create an object to represent the rover. This object will have only one property for now: the direction.

The direction property can contain one of four values: "N", "S", "E", or "W". The rover's default direction will be "N" (as North).

Iteration 2 | Turning the Rover
The rover has a direction attribute. We've already provided functions named turnLeft() and turnRight(). Each function receives a rover object as an argument. Your job is to turn the rover in the appropriate direction based off of its current direction.

Examples:

-Rover is facing North and turns left => Rover is now facing West

-Rover is facing West and turns left => Rover is now facing South

-Rover is facing North and turns right => Rover is now facing East.

Iteration 3 | Moving the Rover
The rover's position
To move the rover around, we have to keep track of the rover's position.

Positions can be represented as a pair of coordinates, x and y. Add two properties to your rover called x and y. Their default values will both be set to 0.
moveForward() is a function of the rover's current direction, and the movement forward.

For instance, if the rover is facing west and moves forward, we would decrease the rover's x by 1.

If the rover is facing north and moves forward, we would decrease the rover's y by 1.

If the rover is facing south and moves forward, we would increase the y by 1.
Iteration 4 | Commands
Create a function that receives a list of commands. These commands will be the first letter of either (f)orward, (r)ight, or (l)eft.

To test it, use the string: ‘rffrfflfrff’.
Iteration 5 | Tracking
We want to know where our rover has been so far. Create a property on the rover object that contains the coordinates of the places where it has been. This property will be an array and you can call it travelLog.

After each move, push the coordinates of the previous place where the rover was to the travelLog array. After the rover has finished its moves, print out all of the places the rover has traveled over.

Bonus 1 | Enforce Boundaries
At some point, you may have accidentally run our rover off of the grid. If you recall, our grid is 10x10.

Make sure your rover doesn't accidentally roam off the map!

Bonus 2 | Move Backwards
Create another function called moveBackward() that will move the rover back. This will be very similar to the moveForward() function.

Bonus 3 | Validate Inputs
If we enter a letter into our inputs that isn't a rover command, nothing happens. For example, ffzzy would simply move forward twice. Add validation so that the inputs must be f, b, r, or l.

Bonus 4 | Obstacles
The following requires you to actually create a grid for the rover to move around on. In code, these grids are often represented as two-dimensional arrays.

Obstacles - Create obstacles for the rover. If the rover's next move would run it into an obstacle, stop it from moving forward and report the obstacle as found with console.log.
Other Rovers - Add additional rovers to the map. Have them take turns moving. If one rover is going to run into the other, you should stop the rover and console.log a message saying so.
