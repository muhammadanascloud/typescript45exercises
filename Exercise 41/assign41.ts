// Q41:
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// let magicians:string[] = ["John","Alex","Qadir","Max"] 

// function show_magicians(magiciansArray:string[]){
//     for(let magician of magiciansArray)
//         console.log(magician)
// }

// show_magicians(magicians);

// // Q42:
// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


let magicians:string[] = ["John","Alex","Qadir","Max"] 

function make_great(magiciansName:string[]){
    magicians.forEach(magician =>{
    }
    }
    return magicians;
}

function show_magicians(magiciansArray:string[]){
    for(let magician of magiciansArray){
        console.log(magician);}
}

let greatMagicians = make_great(magicians);
show_magicians(greatMagicians);



