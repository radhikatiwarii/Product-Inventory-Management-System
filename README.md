# StockMaster – Product Management App

StockMaster is a simple Product Management web application built using **React**, **Tailwind CSS**, **React Router**, and **custom backend API**.  
This project allows users to manage products by adding, viewing, editing, deleting, and searching products by category and name.


##  Features of Product Inventory Management App

->  Product List
- Fetches product data from the backend API.
- Displays products in a responsive table format.
- Columns displayed:
   -Serial Number (1, 2, 3…)
   -Product Name
   -Category
   -Price
- Displays { No products found } if there is no data.
- Edit and Delete actions available for each product.

->  Add Product
- Users can add new products via a form.
- Input fields:
  - Product Name
  - Category
  - Price
- Form validation:
  - All fields are required
  - Name must be at least 2 characters
  - Price must be greater than 0
- Invalid fields are highlighted in red with error messages.
- Product data is sent to the backend API using POST request.
- Redirects to Home page after successful submission

->  Edit Product
- Each product has an Edit button.
- Clicking redirects to Edit page using the product’s ID.
- Form is pre-filled with the product’s current data.
- Updates the product using PUT request to the backend.

->  Delete Product
- Each product has a Delete button.
- Confirmation popup using SweetAlert2 appears before deletion.
- Product is removed from both backend and UI after confirmation using DELETE request.

->   Filter by Category
- A search bar allows filtering products by category or name.
- Search is case-insensitive.
- Only matching products are displayed.
- Displays {No products found} if there is no match.

---

-> Tech Stack

- Frontend: React (Hooks)
- Routing: React Router DOM
- Styling: Tailwind CSS
- Backend: Custom API (Node.js / Express / MongoDB or any backend)
- Icons: React Icons
- Alerts & Confirmations: SweetAlert2

 
 
