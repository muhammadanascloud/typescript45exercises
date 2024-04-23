// Q24:
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

let car:string = "AudiOOOO";
let age:number = 26;
let age2:number = 20;
let friends:string[] = ["Talal","Hasan","Maan","Rafi"];

// • Tests for equality and inequality with strings

// test for equality:
console.log("car==AudiOOOO, it is true");
console.log(car=="AudiOOOO"); //true

// test for inequality with strings:
console.log("car!=AudiOOOO,it is false");
console.log(car!="AudiOOOO"); //false

// • Tests using the lower case function:
console.log("car==car.lowercase(),it is true");
console.log(car!=car.toLowerCase()); //true

console.log("car!=car.lowercase(),it is false");
console.log(car==car.toLowerCase()); //false

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// test for equality:
console.log("age==26, it is true");
console.log(age==26); //true

// test for inequality:
console.log("age===27, it is false");
console.log(age===27); //false

// greater than (>):
console.log("age>age2, it is true");
console.log(age>age2); //true

// less than (<):
console.log("age<age2, it is false");
console.log(age<age2); //false

// greater than or equal to (>=):
console.log("age>=age2,it is true");
console.log(age>=age2); //true

// less than or equal to (<=);
console.log("age<=age2, it is false");
console.log(age<=age2); //false

// • Tests using "and" and "or" operators:
console.log("car==AudiOOOO && age==26, it is true");
console.log(car=="AudiOOOO" && age==26); //true

console.log("age==28 || age2==30, it is false");
console.log(age==28 || age2==30); //false

// • Test whether an item is in a array

console.log("friends.includes(Talal), it is true");
console.log(friends.includes("Talal")); //true

// • Test whether an item is not in a array

console.log("!friends.includes(Rafi), it is false");
console.log(!friends.includes("Rafi")); //false

