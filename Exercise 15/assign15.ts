/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/

let list_of_guests:string[] = ["Zia","Okasha","Hamza","Amin"];
console.log("Sir Zia cannot make it to dinner.So i am inviting Sir Rehan in his place.");
list_of_guests[0]= "Rehan"
console.log("Sir"+" "+ list_of_guests[0]+" "+ "I would like to invite you for dinner on Sunday.I would be very pleasec if you accept my invitation.");
console.log("Sir"+" "+ list_of_guests[1]+" "+ "I would like to invite you for dinner on Sunday.I would be very pleasec if you accept my invitation.");
console.log("Sir"+" "+ list_of_guests[2]+" "+ "I would like to invite you for dinner on Sunday.I would be very pleasec if you accept my invitation.");
console.log("Sir"+" "+ list_of_guests[3]+" "+ "I would like to invite you for dinner on Sunday.I would be very pleases if you accept my invitation.");