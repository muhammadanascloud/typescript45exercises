// Q22:
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var names = ["Anas", "Tayyaba", "Apple", "Orange", 1, 3, 8];
console.log(names[7]);
names.unshift("Sana");
console.log(names[7]);
