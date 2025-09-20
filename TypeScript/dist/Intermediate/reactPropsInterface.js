"use strict";
// FUNCTION: Create a mimic React component
const createButton = ({ label, onClick }) => {
    const button = document.createElement("button");
    button.textContent = label;
    button.addEventListener("click", onClick);
    return button;
};
// Create a new button
const newButton = createButton({
    label: "Click me",
    onClick: () => console.log("Button clicked!")
});
