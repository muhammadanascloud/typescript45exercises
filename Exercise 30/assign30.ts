// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

let usernames:string[] = ["Admin","Sana","Shahrukh","Shoib","Rafi"];

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?


for(let i=0; i<usernames.length; i++){

    if(usernames[i] === "Admin"){
        console.log("Hello Admin! Would you like to see a status report?\n")
    }


// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
    else{
    console.log(`Hi ${usernames[i]}!Thanks for logging in again.\n`)
}
}








