"use strict";
;
;
const displayTextBox = (input) => {
    return `Input: ${input.id}\nText: ${input.text}`;
};
console.log(displayTextBox({ id: "01", text: "Name" }));
