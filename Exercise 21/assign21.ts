// Q21:
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface item {
    title:string,
    followers:number,
    isFollow:boolean,
    about:string,
}

// creating object
const socialmedia = {
    title: "Muhammad Anas",
    followers: 1000,
    isFollow: true,
    about:"Aspiring AI student",
}

console.log(`title: ${socialmedia.title}, followers: ${socialmedia.followers}, isFollow: ${socialmedia.isFollow}, about: ${socialmedia.about}`)