"use strict";
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list.
let animals = ["Dog", "Cat", "Horse"];
// Then use a for loop to print out the name of each animal. 
for (let animal of animals) {
    console.log(`${animal}`);
}
console.log("\n"); //for adding line space
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
for (let animal of animals) {
    if (animal === "Dog") {
        console.log(`A ${animal} is a very loyal pet.`);
    }
    else if (animal === "Cat") {
        console.log(`A ${animal} is most cutest animal on planet.`);
    }
    else if (animal === "Horse") {
        console.log(`A ${animal} is very beautiful animal.\n`);
    }
}
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log("All of the above animals are very loyal and cute. They are great pets. When you keep them at your home, there is always positivity and happiness in your environment.");
