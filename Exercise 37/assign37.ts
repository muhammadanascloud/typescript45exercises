// Q37:
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size = "Large" , message = "I love Typescript."){
    console.log(`The size of this T-Shirt is ${size}.\nThe message to be printed on this T-Shirt is ${message}`);
}
make_shirt();

make_shirt("Medium" , undefined );

make_shirt("Small","Crying is my hobby.");