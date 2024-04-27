// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users: string[] = ["Anas","Saba","Talal","Sadiq","Michael"];
let new_users: string[] = ["John","SADIQ","Saba","Shahrukh","Salman"];

let current_users_lowercase = current_users.map(user => user.toLowerCase());

let new_users_lowercase = new_users.map(user => user.toLowerCase());

for(let user of new_users_lowercase){
    if(current_users_lowercase.includes(user))
    console.log(`Hi ${user}! This username is already taken.You need to enter a new username.`);
else{
    console.log(`${user}! This username is available.`)
}
}