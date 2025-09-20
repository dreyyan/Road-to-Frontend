// FUNCTION: Log formatted message based on input type
const displayValue = (value: string | number | boolean): void => {
    let inputType: string;

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
    } console.log(`Input received: ${inputType}`)
};

// Test function
displayValue("");
displayValue(0);
displayValue(true);