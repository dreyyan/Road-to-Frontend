interface UserProfile {
    avatarUrl?: string | null;
}

// FUNCTION: Return URL of user's avatar
const getAvatarURL = (user: UserProfile): string => {
    if (typeof user.avatarUrl === "string")
        return user.avatarUrl;
    else if (user.avatarUrl === null)
        return "No URL";
    else
        return "N/A";
};  

// Test function
let user4: UserProfile = { avatarUrl: "user2/avatar" };
let user5: UserProfile ={ avatarUrl: null };
let user6: UserProfile ={};

console.log(getAvatarURL(user4));
console.log(getAvatarURL(user5));
console.log(getAvatarURL(user6));