// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alienColour:string = "Green";
if(alienColour==="Green"){
    console.log("You just earned 5 points.");
}
else if(alienColour==="Yellow"){
    console.log("You just earned 10 points");
}
else if(alienColour==="Red"){
    console.log("You just earned 15 points.");
}

alienColour= "Yellow";
if(alienColour==="Green"){
    console.log("You just earned 5 points.");
}
else if(alienColour==="Yellow"){
    console.log("You just earned 10 points");
}
else if(alienColour==="Red"){
    console.log("You just earned 15 points.");
}

alienColour= "Red";
if(alienColour==="Green"){
    console.log("You just earned 5 points.");
}
else if(alienColour==="Yellow"){
    console.log("You just earned 10 points");
}
else if(alienColour==="Red"){
    console.log("You just earned 15 points.");
}