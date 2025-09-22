"use strict";
// FUNCTION: Return URL of user's avatar
const getAvatarURL = (user) => {
    if (typeof user.avatarUrl === "string")
        return user.avatarUrl;
    else if (user.avatarUrl === null)
        return "No URL";
    else
        return "N/A";
};
// Test function
let user4 = { avatarUrl: "user2/avatar" };
let user5 = { avatarUrl: null };
let user6 = {};
console.log(getAvatarURL(user4));
console.log(getAvatarURL(user5));
console.log(getAvatarURL(user6));
