interface Product {
  id: number;
  name?: string;
  price?: number;
}

// Create a 'Required' type
type RequiredProduct = Required<Product>;

// All fields are now required
const product1: RequiredProduct = { id: 100, name: "Adam", price: 20 };
// const product2: RequiredProduct = { id: 101 }; // Not allowed since all fields are required