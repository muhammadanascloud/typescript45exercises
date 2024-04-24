// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

let favouriteFruits:string[] = ["Apple", "Strawberry","Pomegrenate"]; 

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

if(favouriteFruits.includes("Apple")){
    console.log("You really like APPLES.")
}
if(favouriteFruits.includes("Orange")){
    console.log("You really like ORANGES.")
}
if(favouriteFruits.includes("Pomegrenate")){
    console.log("You really like POMEGRENATES.")
}
if(favouriteFruits.includes("Banana")){
    console.log("You really like BANANAS.")
}
if(favouriteFruits.includes("Strawberry")){
    console.group("You really like STRAWBERRIES.")
}
