const createListStore = <T>(items: T[]): object => {
    return {
        add(item: T) {
            items.push(item);
        },
        getAll(): T[] {
            return items;
        }
    };
}

console.log(createListStore(["A", "B", "C"]));