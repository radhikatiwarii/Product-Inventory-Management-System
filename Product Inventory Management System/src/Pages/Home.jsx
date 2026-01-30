import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import ProductList from "../Components/ProductList";
import SearchBar from "../Components/SearchBar";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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
  Swal.fire({
    title: "Are you sure?",
    text: "This product will be deleted permanently!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#dc2626",  
    cancelButtonColor: "#64748b",  
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel"
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await fetch(`http://localhost:5000/products/${id}`, {
          method: "DELETE"
        });

        setProducts(products.filter((product) => product.id !== id));

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "Product has been deleted.",
          timer: 1500,
          showConfirmButton: false
        });
      } catch (error) {
        console.error("Failed to delete product:", error);

        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Failed to delete product"
        });
      }
    }
  });
};
  const handleEdit = (product) => {
    navigate(`/edit/${product.id}`);
  };

  const filteredProducts = products.filter((product) =>
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="font-sans">

      <Navbar />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <h1 className="px-8 pt-6 text-3xl  font-bold mx-7 ">StockMaster</h1>
      <h2 className="px-8 py-3 pb-7 text-xl   text-[#627495]  font-bold   mx-7 ">Take Control of Your Inventory, One Product at a Time</h2>
      {/* SearchBar */}
      <ProductList
        products={filteredProducts}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default Home;
