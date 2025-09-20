"use strict";
// Create a 'User' object
let user1 = { id: 100, name: "John Doe", isActive: true };
// Get user properties to display them along with respective info
const keys = Object.keys(user1);
// Log output
console.log("[ User Information ]");
for (let key of keys) {
    console.log(`${key} -> ${user1[key]}`);
}
