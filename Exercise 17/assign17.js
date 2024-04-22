"use strict";
// Q 17:
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let list_of_guests = ['Hifza', 'Rehan', 'Qasim', 'Hamza', 'Amin', 'Okasha']; //from Q16
let newMessage = "Unfortunately, my big size dinner table is not available at the moment,so i can only invite two people for the dinner.\n ";
console.log(newMessage);
while (list_of_guests.length > 2) {
    let removedGuest = list_of_guests.pop();
    if (removedGuest !== undefined) {
        console.log(`Sorry ${removedGuest}, I can't invite you to dinner.\n`);
    }
}
console.log(list_of_guests);
for (let i = 0; i < list_of_guests.length; i++) {
    console.log(`Dear ${list_of_guests[i]}. You are still invited to dinner.`);
}
list_of_guests.splice(0, 2);
console.log(list_of_guests);
