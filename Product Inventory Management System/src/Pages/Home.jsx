import { useState, useEffect } from "react";
import ProductList from "../Components/ProductList";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Home() {
  const [products, setProducts] = useState([]);  
   const navigate = useNavigate(); 
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

   
  
  const handleEdit = (product) => {
  navigate(`/edit/${product.id}`);  
};

  return (
    <div className="font-sans">
         
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
