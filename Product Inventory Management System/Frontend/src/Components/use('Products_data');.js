use('Products_data'); 

// Agar collection already hai, delete karo pehle (optional)
db.products.drop();

// Insert products with custom numeric IDs
db.products.insertMany([
  {   name: "Laptop", brand: "Dell", price: 75000 },
  {   name: "Mouse", brand: "Logitech", price: 1500 },
  {   name: "Keyboard", brand: "HP", price: 2000 },
  {   name: "Monitor", brand: "Samsung", price: 12000 }
]);

// Verify
const allProducts = db.products.find().toArray();
console.log(allProducts);


// Find a product by _id
// db.products.find({ _id: 2 }).toArray();

// Update a product price
// db.products.updateOne(
//   { _id: 3 }, 
//   { $set: { price: 2200 } }
// );/


// Delete a product
// db.products.deleteOne({ _id: 4 });

// List all products
// db.products.find().toArray();
