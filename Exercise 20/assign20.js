"use strict";
// Q20:
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let languages = ["Spanish", "Urdu", "English", "Arabic", "Japanese"];
// console.log("languages:",languages.join(", "));
// OR WE CAN DO THIS BY FOR LOOP ALSO;
for (let i = 0; i < languages.length; i++) {
    console.log(`${languages[i]}`);
}
