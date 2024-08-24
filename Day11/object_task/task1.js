// Create the main object
const mainObject = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
};

// Accessing the value inside the nested object
const streetName = mainObject.address.street;

console.log("Street Name:", streetName);
