const formatText = (type: "uppercase" | "lowercase" | "capitalize", text: string): string => {
    switch (type) {
        case "uppercase":
            return text.toUpperCase();
            break;
        case "lowercase":
            return text.toLowerCase();
            break;
        case "capitalize":
            return text[0].toUpperCase() + text.substring(1);
            break;
    }
};

console.log(formatText("uppercase", "onomatopoeia"));
console.log(formatText("lowercase", "ONOMATOPOEIA"));
console.log(formatText("capitalize", "onomatopoeia"));