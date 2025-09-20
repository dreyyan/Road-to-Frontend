"use strict";
// FUNCTION: Create a form field
const createFormField = (name, value, required) => {
    return { name, value, required };
};
// FUNCTION: Create 'n' form fields
const createFormFields = (n) => {
    let formFields = [];
    // Create pre-defined form values
    const names = ["input", "dropdown"];
    const values = [1, "A"];
    const required = [true, false];
    for (let i = 0; i < n; ++i) {
        let randomIndex = Math.round(Math.random()); // Create random seed
        formFields.push(createFormField(names[randomIndex], values[randomIndex], required[randomIndex]));
    }
    return formFields;
};
// Create array of form fields
let formFields = createFormFields(3);
// Display form fields
for (let field of formFields) {
    console.log(field);
}
