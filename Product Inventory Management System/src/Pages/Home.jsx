import { useState, useEffect } from "react";
import ProductList from "../Components/ProductList";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Home() {
  const [products, setProducts] = useState([]); // Products array
  const [productToEdit, setProductToEdit] = useState(null); // For edit
  const navigate = useNavigate(); // React Router navigation

  // Fetch products from json-server using async/await
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/products");
        const data = await res.json();
        setProducts(data);
        console.log("Fetched products:", data);

      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Delete product
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await fetch(`http://localhost:5000/products/${id}`, { method: "DELETE" });
        setProducts(products.filter((product) => product.id !== id));
      } catch (error) {
        console.error("Failed to delete product:", error);
      }
    }
  };

  // Edit product
  const handleEdit = (product) => {
    setProductToEdit(product);
    navigate(`/edit/${product.id}`); // Redirect to edit page
  };

  return (
    <div>
        <Navbar />
        <h1 className="px-8 pt-6 text-3xl  font-bold mx-7 ">StockMaster</h1>
        <h2 className="px-8 py-3 pb-7 text-xl   text-[#627495]  font-bold   mx-7 ">Take Control of Your Inventory, One Product at a Time</h2>
      <ProductList 
        products={products} 
        onDelete={handleDelete} 
        onEdit={handleEdit} 
      />
    </div>
  );
}

export default Home;
