type obj1 = { toggle: () => void; isToggled: boolean; }

const createToggle = (toggled: boolean): obj1 => {
    return { toggle: () => console.log("Toggled!"), isToggled: toggled };
};

let myObj: obj1 = createToggle(false);
console.log(myObj);