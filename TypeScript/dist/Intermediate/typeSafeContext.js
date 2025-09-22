"use strict";
const toggleTheme = (theme) => {
    theme = theme === "light" ? "dark" : "light";
    console.log(`Switched to ${theme}!`);
    return theme;
};
// Test function
let theme = "light";
theme = toggleTheme(theme);
theme = toggleTheme(theme);
theme = toggleTheme(theme);
