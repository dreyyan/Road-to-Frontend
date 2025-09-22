"use strict";
const processLargeList = (list) => {
    return list.filter(item => item.length > 3);
};
let list = ["Dog", "Cat", "Elephant", "Horse", "Giraffe"];
console.log(processLargeList(list));
