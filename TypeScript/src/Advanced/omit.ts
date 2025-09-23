interface Employee1 {
  id: number;
  name: string;
  role: string;
  salary: number;
}

type PublicEmployee = Omit<Employee1, "salary">;

let publicEmployee: PublicEmployee = {
  id: 1,
  name: "Alice",
  role: "Engineer",
};