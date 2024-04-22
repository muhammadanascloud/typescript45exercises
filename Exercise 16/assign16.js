// Q16:
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var list_of_guests = ["Zia", "Okasha", "Hamza", "Amin"];
console.log("Sir Zia cannot make it to dinner.So i am inviting Sir Rehan in his place.");
list_of_guests[0] = "Rehan";
console.log("Hello Guys. I found a bigger dinner table.");
list_of_guests.unshift("Hifza");
console.log(list_of_guests);
var middle = list_of_guests.length / 2;
list_of_guests.splice(middle, 1, "Qasim");
console.log(list_of_guests);
list_of_guests.push("Okasha");
console.log(list_of_guests);
for (var i = 0; i < list_of_guests.length; i++) {
    console.log("Hi ".concat(list_of_guests[i], "! I would like to invite you for dinner."));
}
