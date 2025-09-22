interface BaseData {
    id: string;
};

interface TextData {
    text: string;
};

const displayTextBox = (input: BaseData & TextData): string => {
    return `Input: ${input.id}\nText: ${input.text}`;
};

console.log(displayTextBox({ id: "01", text: "Name" }));