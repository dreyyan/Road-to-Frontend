type largeList = string[];
const processLargeList = (list: largeList): largeList => {
    return list.filter(item => item.length > 3);
};

let list: largeList = ["Dog", "Cat", "Elephant", "Horse", "Giraffe"];
console.log(processLargeList(list));