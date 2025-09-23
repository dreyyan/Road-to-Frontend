interface Config {
  apiUrl: string;
  retries: number;
}

// Create a 'ReadOnly' type
type ReadOnlyConfig = Readonly<Config>;

// All fields are now immutable
let config1: ReadOnlyConfig = { apiUrl: "https://.com", retries: 3 };
// config1.apiUrl = "http://.com"; // Not allowed