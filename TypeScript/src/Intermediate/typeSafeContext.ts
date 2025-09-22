type Theme2 = "light" | "dark";

const toggleTheme = (theme: Theme2): Theme2 => {
    theme = theme === "light" ? "dark" : "light";
    console.log(`Switched to ${theme}!`);
    return theme;
};

// Test function
let theme: Theme2 = "light";
theme = toggleTheme(theme);
theme = toggleTheme(theme);
theme = toggleTheme(theme);