// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let pizzaFlavours : string[] = ["Fajita","Cheesemax","Vegies Lover"];

for(let pizza of pizzaFlavours){
    if(pizza === "Fajita"){
        console.log(`I really really love ${pizza} flavour.`); //fajita
}
else if(pizza === "Cheesemax"){
    console.log(`${pizza} flavour is the best.`); //Cheesemax
}
else{
    console.log(`${pizza} flavour I can eat you all.\n`); //Vegies Lover
}
}

console.log("I like pizza so much. I love fajita flavour the most. But i can eat other flavours too. Some other flavours that i like are Cheese Max, Vegies Lover, Chicken Supreme and many more. The pizza shop i like the most is broadway.");