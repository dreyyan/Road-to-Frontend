"use strict";
const processInputEvent = (input, key) => {
    switch (key) {
        case "Enter":
            return `Submit: ${input}`;
            break;
        case "Escape":
            return "Cancelled input";
            break;
    }
};
console.log(processInputEvent("Bob", "Enter"));
console.log(processInputEvent("Bob", "Escape"));
