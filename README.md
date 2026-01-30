# StockMaster – Product Management App

StockMaster is a simple Product Management web application built using **React**, **Tailwind CSS**, **React Router**, and **JSON Server**.  
This project allows users to manage products by adding, viewing, editing, deleting, and searching products by category.


##  Features of Product Inventory Management App

->  Product List
- Fetches product data from JSON Server
- Displays products in a table format
- Shows Product ID, Name, Category, and Price
- Displays { No products found } if data is empty

->  Add Product
- Add new products using a form
- Input fields:
  - Product Name
  - Category
  - Price
- Form validation:
  - All fields are required
  - Name must be at least 2 characters
  - Price must be greater than 0
- Error messages shown below inputs
- Invalid fields highlighted in red
- Redirects to Home page after successful submission

->  Edit Product
- Edit button available for each product
- Redirects to Edit page using product ID
- Existing product data is pre-filled
- Updates product details using PUT request

->  Delete Product
- Delete button for each product
- Confirmation popup before deletion
- Product removed from database and UI

->   Filter by Category
- Search bar to filter products by category
- Case-insensitive search
- Shows matching products only
- Displays { No products found } if no match exists

---

-> Tech Stack

- React (Hooks)
- React Router DOM
- Tailwind CSS
- JSON Server
- React Icons

 
 
