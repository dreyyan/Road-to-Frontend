const displayItem = (item: string | number): string => {
    switch (typeof item) {
        case "string":
            return "Item: String";
            break;
        case "number":
            return "Item: Number";
            break;
    }
};

console.log(displayItem(""));
console.log(displayItem(0));