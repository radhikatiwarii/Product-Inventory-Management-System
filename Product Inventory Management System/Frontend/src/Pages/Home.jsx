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

  // ✅ Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  // ✅ Delete functionality
 const handleDelete = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "This product will be deleted permanently!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#dc2626",
    cancelButtonColor: "#64748b",
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
         await fetch(`http://localhost:5000/api/products/${id}`, {
          method: "DELETE",
        });

 setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "Product has been deleted.",
          timer: 1500,
          showConfirmButton: false,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Failed to delete product",
        });
      }
    }
  });
};


  // ✅ Edit functionality
  const handleEdit = (product) => {
    navigate(`/edit/${product._id}`);
  };

  // ✅ Search  functionality
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Navbar />

      {/* Search bar */}
      <div className="px-4 sm:px-8 mt-6">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {/* Page header */}
      <div className="px-8 pt-6 text-3xl font-bold mx-7 text-center">
        StockMaster
      </div>
      <h2 className="px-8 py-3 pb-7 text-xl text-[#627495] font-bold mx-7 text-center">
        Take Control of Your Inventory, One Product at a Time
      </h2>

      {/* Product list */}
      <div className="px-4 sm:px-8 mt-6 mb-8">
        <ProductList
          products={filteredProducts}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default Home;