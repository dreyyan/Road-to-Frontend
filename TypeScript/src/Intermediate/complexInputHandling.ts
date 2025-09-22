const processInputEvent = (input: string, key: "Enter" | "Escape"): string => {
    switch (key) {
        case "Enter":
            return `Submit: ${input}`;
            break;
        case "Escape":
            return "Cancelled input";
            break;
    }
};

console.log(processInputEvent("Bob", "Enter"));
console.log(processInputEvent("Bob", "Escape"));