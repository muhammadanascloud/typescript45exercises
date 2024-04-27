"use strict";
// Q31:
// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// [Q30
let usernames = ["Admin", "Sana", "Shahrukh", "Shoib", "Rafi"];
//Q30]
if (usernames.length == 0) {
    console.log("We need to find some users.");
}
// • Remove all of the usernames from your array, and make sure the correct message is printed.
usernames = [];
// • If the list is empty, print the message We need to find some users!
if (usernames.length == 0) {
    console.log("We need to find some users.");
}
