// Q18:
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.

let places:string[] = ["Melbourne","Bali","Tajikistan","Dubai","Finland"];
console.log("Orignal Order",places);

// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.

console.log("Alphabetical Order:",[...places].sort());
console.log("Orignal Order",places);

// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.

console.log("Reverse Alphatical Order:",[...places].sort().reverse());
console.log("Orignal Order",places);

// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.

places.reverse();
console.log(places);
places.reverse();
console.log(places);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

places.sort();
console.log(places);
places.sort().reverse();
console.log(places);