"use strict";
const createToggle = (toggled) => {
    return { toggle: () => console.log("Toggled!"), isToggled: toggled };
};
let myObj = createToggle(false);
console.log(myObj);
