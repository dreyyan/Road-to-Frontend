"use strict";
;
const processSignupForm = ({ username, password, confirmPassword }) => {
    return (password == confirmPassword ? `Username: ${username}\nPassword: ${password}` : "ERROR: Passwords do not match");
};
console.log(processSignupForm({ username: "dreyyan", password: "12345", confirmPassword: "12345" }));
console.log(processSignupForm({ username: "dreyyan", password: "12345", confirmPassword: "123" }));
