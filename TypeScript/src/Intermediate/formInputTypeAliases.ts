type FormField = {
    name: string;
    value: string | number;
    required: boolean;
}

// FUNCTION: Create a form field
const createFormField = (name: string, value: string | number, required: boolean): FormField => {
    return { name, value, required };
};

// FUNCTION: Create 'n' form fields
const createFormFields = (n: number): FormField[] => {
    let formFields: FormField[] = []; // To store newly created form fields

    // Create pre-defined form values
    const names: string[] = ["input", "dropdown"];
    const values: (string | number)[] = [1, "A"];
    const required: boolean[] = [true, false];

    // This loop creates up to 'n' form fields using the pre-defined form values
    for (let i = 0; i < n; ++i) {
        let randomIndex = Math.round(Math.random()); // Create random seed
        formFields.push(createFormField(names[randomIndex], values[randomIndex], required[randomIndex]));
    }

    return formFields;
};

// Create array of form fields
let formFields: FormField[] = createFormFields(3);

// Display form fields
for (let field of formFields) {
    console.log(field);
}