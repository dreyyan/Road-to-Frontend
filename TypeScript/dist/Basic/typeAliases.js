"use strict";
// FUNCTION: Calculates the distance of a point from the origin
const distanceFromOrigin = (coordinates) => {
    const ORIGIN = [0, 0];
    const [x, y] = coordinates; // Destructure coordinate values
    return Math.sqrt((x ** 2 + y ** 2)); // Calculate using Euclidean distance formula
};
let testCoordinates = [4, 7];
// Test function
console.log(`${testCoordinates} is ${distanceFromOrigin(testCoordinates)} away from the origin.`);
