"use strict";
const getButtonStyles = (buttonType) => {
    switch (buttonType) {
        case "primary":
            return "background-color: blue; color: white;";
        case "secondary":
            return "background-color: gray; color: white;";
        case "danger":
            return "background-color: red; color: white;";
    }
};
// Test function
console.log(getButtonStyles("primary"));
console.log(getButtonStyles("secondary"));
console.log(getButtonStyles("danger"));
