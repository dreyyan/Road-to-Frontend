type obj = { value: string; };

const getInputValue = (object: obj): string => {
    return object.value.toString(); 
};

console.log(getInputValue({value: "Tree"}));