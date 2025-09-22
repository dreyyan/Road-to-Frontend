type strLength = string | string[];

// FUNCTION: Returns the length of a string or an array of strings
const getLength = (input: strLength): number => {
    switch (typeof input) {
        case "string":
            return input.length;
            break;
        case "object":
            return input.length;
            break;
    }
};

// Test function
console.log(getLength("Onomatopoeia"));
console.log(getLength(["A", "Yes", "Three"]));