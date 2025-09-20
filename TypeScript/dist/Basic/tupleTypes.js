"use strict";
const validateRGB = (color) => {
    const [red, green, blue] = color;
    // Check if RGB values are within valid ranges
    for (let value of color) {
        if (value < 0 || value > 255) {
            console.log(`ERROR: Not a valid color`);
            return;
        }
    }
    // Display if valid color
    console.log(`RGB(${color}) is a valid color`);
};
// Test function
validateRGB([5, 76, 168]);
validateRGB([20, 401, -2]);
