// Iteration 1 | The Rover Object
const rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog:[],
 }
 
 let direction = rover.direction;
 let positionX = rover.x;
 let positionY = rover.y;
 let travelLog = rover.travelLog;
 
 //===========================================================================
 
 //Bonus 4 | Obstacles
 const grid = [
 ['0,0', '1,0', '2,0', '3,0', '4,0', '5,0', '6,0', '7,0', '8,0', '9,0'],
 ['0,1', '1,1', '2,1', '3,1', '4,1', '5,1', '6,1', '7,1', '8,1', '9,1'],
 ['0,2', '1,2', '2,2', '3,2', '4,2', '5,2', '6,2', '7,2', '8,2', '9,2'],
 ['0,3', '1,3', '2,3', '3,3', '4,3', '5,3', '6,3', '7,3', '8,3', '9,3'],
 ['0,4', '1,4', '2,4', '3,4', '4,4', '5,4', '6,4', '7,4', '8,4', '9,4'],
 ['0,5', '1,5', '2,5', '3,5', '4,5', '5,5', '6,5', '7,5', '8,5', '9,5'],
 ['0,6', '1,6', '2,6', '3,6', '4,6', '5,6', '6,6', '7,6', '8,6', '9,6'],
 ['0,7', '1,7', '2,7', '3,7', '4,7', '5,7', '6,7', '7,7', '8,7', '9,7'],
 ['0,8', '1,8', '2,8', '3,8', '4,8', '5,8', '6,8', '7,8', '8,8', '9,8'],
 ['0,9', '1,9', '2,9', '3,9', '4,9', '5,9', '6,9', '7,9', '8,9', '9,9'],
 ];
 let obstacle1 = Number(grid[0][4][0]); // x=4
 let obstacle2 = Number(grid[5][0][2]); // y=5
 
 //==========================================================================
 //Iteration 2 | Turning the Rover
 function turnRover(rover, command) {
   if (command === "left") {
     console.log("turnLeft was called!");
     switch (direction) {
       case "N":
         direction = "W";
         console.log(`Rover is now facing West : ${direction}`);
         break;
       case "W":
         direction = "S";
         console.log(`Rover is now facing South : ${direction}`);
         break;
       case "S":
         direction = "E";
         console.log(`Rover is now facing East : ${direction}`);
         break;
       case "E":
         direction = "N";
         console.log(`Rover is now facing North : ${direction}`);
         break;
     }
   } else if (command === "right") {
     console.log("turnRight was called!");
     switch (direction) {
       case "N":
         direction = "E";
         console.log(`Rover is now facing East : ${direction}`);
         break;
       case "E":
         direction = "S";
         console.log(`Rover is now facing South : ${direction}`);
         break;
       case "S":
         direction = "W";
         console.log(`Rover is now facing West : ${direction}`);
         break;
       case "W":
         direction = "N";
         console.log(`Rover is now facing North : ${direction}`);
         break;
     }
   } else {
     console.log(`Invalid turn command`);
   }
 }
 
 //==========================================================================
 //Iteration 3 | Moving the Rover Forward
 function moveForward(rover){
     console.log('Rover moved forward');
   switch (direction) {
         case 'W':
           positionX--;
           logPosition();
           break;
         case 'E': if(positionX === obstacle1){
           console.log('Obstacle reached, change direction to continue');
         } else {
          positionX++;
           logPosition();
         }
          break;
           case 'N':
           positionY--;
           logPosition();
           break;
         case 'S': if(positionY === obstacle2){
           console.log('Obstacle reached, change direction to continue');
         } else {
           positionY++; 
           logPosition();
         }
           break; 
       }   
 }
 
 //==========================================================================
 
 //Bonus 2 | Move Backwards
 function moveBackward(rover){
     console.log('Rover moved backward');
       switch (direction) {
         case 'W':
          positionX++;
           logPosition();
           break;
         case 'E':
          positionX--
           logPosition();
          break;
           case 'N':
           positionY++;
           logPosition();
           break;
         case 'S':
           positionY--; 
           logPosition();
           break; 
         }   
 }
 
 //==========================================================================
 
 //Iteration 4 | Commands
 //&& Bonus 1 | Enforce Boundaries 
 //&&  Bonus 3 | Validate Inputs
 function commandRover (commands) {
     for(let i=0; i<commands.length; i++) {
     let letter = commands[i];
     if(positionX >= 0 && positionY >= 0 && positionX <10 && positionY < 10) {
       switch(letter) {
         case 'r':
         turnRover(rover, 'right');
         break;
         case 'l':
         turnRover(rover, 'left');
         break;
         case 'f':
         moveForward(rover);
         break;
         case 'b':
         moveBackward(rover);
         break;
         default:
         //console.log(`Invalid Rover Commands: only 'r', 'l', 'f', 'b' allowed`);
         break;
      }
    } else {
     console.log('Rover is not allowed outside the grid');
      }  
   } 
 }
  
 commandRover('rfffffrffffff');
  
 //==========================================================================
 
 //Iteration 5 | Tracking
 function logPosition () {
   travelLog.push(`${positionX}, ${positionY}`);
 } 
 
 (function printTravelLog () {
   for (let i=0; i< travelLog.length; i++) {
   const lastIndex = travelLog.length-1;
   if(i=== 0) console.log(`Rover's Start Path Coordinates: ${travelLog[i]}`);
   else if (i === lastIndex) console.log(`Rover's Finish Path Coordinates: ${travelLog[i]}`);
   else console.log(`Path ${i} ==> ${travelLog[i]}`);
  }
 })();
 
 
 
 