"use strict";
// FUNCTION: Log formatted message based on input type
const displayValue = (value) => {
    let inputType;
    switch (typeof value) {
        case "string":
            inputType = "string";
            break;
        case "number":
            inputType = "number";
            break;
        case "boolean":
            inputType = "boolean";
            break;
    }
    console.log(`Input received: ${inputType}`);
};
// Test function
displayValue("");
displayValue(0);
displayValue(true);
