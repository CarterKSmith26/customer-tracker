const customers = [
  {
    name: "Carter Smith",
    email: "cartersmith1@gmail.com",
    purchases: ["Laptop", "Mouse"]
  },
  {
    name: "Bob Smith",
    email: "bobsmith1@gmail.com",
    purchases: ["Tablet"]
  },
  {
    name: "Charlie Smith",
    email: "charliesmith1@gmail.com",
    purchases: ["Phone", "Charger"]
  }
];

customers.push({
  name: "Diana Smith",
  email: "dianasmith1@gmail.com",
  purchases: ["Smartwatch"]
});

customers.shift();

customers[0].email = "thisisbobsnewemail@gmail.com";

customers[1].purchases.push("Camera");

customers.forEach((customer) => {
  console.log(`Name: ${customer.name}`);
  console.log(`Email: ${customer.email}`);
  console.log(`Total Purchases: ${customer.purchases.length}`);
  console.log("----------------------------");
});
