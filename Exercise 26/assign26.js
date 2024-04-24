"use strict";
// Q26:
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// // • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
let alien_colour = "Green";
if (alien_colour === "Green") {
    console.log("You just earned 5 points for shooting the alien.");
}
else {
    console.log("You just earned 10 points.");
}
// • Write one version of this program that runs the if block and another that runs the else block.
alien_colour = "Red";
if (alien_colour === "Green") {
    console.log("You just earned 5 points for shooting the alien.");
}
else {
    console.log("You just earned 10 points.");
}
