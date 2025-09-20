"use strict";
var Theme;
(function (Theme) {
    Theme[Theme["LIGHT"] = 0] = "LIGHT";
    Theme[Theme["DARK"] = 1] = "DARK";
    Theme[Theme["SYSTEM"] = 2] = "SYSTEM";
})(Theme || (Theme = {}));
;
// FUNCTION: Returns a CSS class based on input theme
const getCSSClass = (theme) => {
    switch (theme) {
        case Theme.LIGHT:
            return 'theme-light';
            break;
        case Theme.DARK:
            return 'theme-dark';
            break;
        case Theme.SYSTEM:
            return 'theme-system';
            break;
        default:
            return 'theme.light';
    }
};
// Test function
console.log(getCSSClass(Theme.LIGHT));
console.log(getCSSClass(Theme.DARK));
console.log(getCSSClass(Theme.SYSTEM));
