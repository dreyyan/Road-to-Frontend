// FUNCTION: Get string or number input
const returnLength = (input: string | number): number => {
    return (input as string).toString().length;
};

// Test function
console.log(returnLength("Onomatopoeia"));
console.log(returnLength(6));