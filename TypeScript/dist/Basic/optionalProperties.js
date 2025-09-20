"use strict";
// Create two profiles: 1 with and 1 without bio
let user2 = { name: "Adam", bio: "Hi, my name is Adam! I'm an aspiring full-stack developer." };
let user3 = { name: "Bob" };
// Log output
for (let key in user2) {
    console.log(user2[key]);
}
for (let key in user3) {
    console.log(user3[key]);
}
