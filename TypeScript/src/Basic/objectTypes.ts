// Define an 'object' type for a 'User' /w properties: 'id' (number), 'name' (string), and 'isActive' (boolean)
interface User {
    id: number;
    name: string;
    isActive: boolean;
}

// Create a 'User' object
let user1: User = { id:100, name: "John Doe", isActive: true };

// Get user properties to display them along with respective info
const keys = Object.keys(user1) as (keyof User)[];

// Log output
console.log("[ User Information ]");
for (let key of keys) {
    console.log(`${key} -> ${user1[key]}`)
}