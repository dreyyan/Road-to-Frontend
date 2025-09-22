"use strict";
const createListStore = (items) => {
    return {
        add(item) {
            items.push(item);
        },
        getAll() {
            return items;
        }
    };
};
console.log(createListStore(["A", "B", "C"]));
