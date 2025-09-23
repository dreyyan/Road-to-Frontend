interface User2 {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Pick only ids
type Keys = "id" | "age";
type UserInfo = Pick<User2, Keys>;

let user7: User2 = { id: 100, name: "Adam", email: "example@domain.com", age: 20 };
let userInfo: UserInfo = { id: user7.id, age: user7.age };