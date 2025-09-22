"use strict";
const safeExecute = (returnString) => {
    try {
        const result = returnString();
        return { result };
    }
    catch (e) {
        return { error: e.message || "Unknown error" };
    }
};
const greet = () => "Hello World!";
console.log(safeExecute(greet));
const fail = () => { throw new Error("Something went wrong"); };
console.log(safeExecute(fail));
