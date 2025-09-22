interface Person {
    name: string;
    age: number;
}

interface Employee {
    id: number;
    role?: string;
}

// Intersection of Person and Employee
type Staff = Person & Employee;

// Instantiate `Staff` object
let staff: Staff = {
    name: "Adam",
    age: 20,
    id: 100
};