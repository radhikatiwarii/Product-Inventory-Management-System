import Navbar from "../Components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function AddProduct() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Product name is required";
    } else if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!category.trim()) {
      newErrors.category = "Category is required";
    }

    if (!price) {
      newErrors.price = "Price is required";
    } else if (Number(price) <= 0) {
      newErrors.price = "Price must be greater than 0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  try {
     const res = await fetch("http://localhost:5000/products");
    const products = await res.json();

     const lastId =
      products.length > 0
        ? Number(products[products.length - 1].id)
        : 0;

     const newProduct = {
      id: String(lastId + 1), 
      name,
      category,
      price: Number(price)
    };

     await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    });

Swal.fire({
  icon: "success",
  title: "Product Added!",
  text: "Product added successfully",
  showConfirmButton: false,
  timer: 2000,
  background: "#ffffff",
  color: "#1f2937"
});    navigate("/");
  } catch (error) {
    console.log("Error adding product:", error);
  }
};

  return (
    <>
      <Navbar />

      <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-xl my-[4rem] border border-gray-100">
        <h2 className="text-2xl font-bold text-slate-800 text-center">
          Add Product
        </h2>

        <p className="text-sm text-slate-500 mt-1 text-center mb-5 pb-5">
          Please enter Product details
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* PRODUCT NAME */}
          <div>
            <label className="text-[#62748e]">Product Name</label>
            <input
              type="text"
              placeholder="Product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full p-3 rounded-lg focus:outline-none
                ${errors.name
                  ? "border border-red-300 bg-[#fef2f2] focus:border-red-400"
                  : "border border-gray-300 bg-[#fbfcfd] focus:border-[#a4f4cf]"
                }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1 mb-2">
                {errors.name}
              </p>
            )}
          </div>

          {/* CATEGORY */}
          <div>
            <label className="text-[#62748e]">Category</label>
            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={`w-full p-3 rounded-lg focus:outline-none
                ${errors.category
                  ? "border border-red-300 bg-[#fef2f2] focus:border-red-400"
                  : "border border-gray-300 bg-[#fbfcfd] focus:border-[#a4f4cf]"
                }`}
            />
            {errors.category && (
              <p className="text-red-500 text-xs mt-1 mb-2">
                {errors.category}
              </p>
            )}
          </div>

          {/* PRICE */}
          <div>
            <label className="text-[#62748e]">Price</label>
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className={`w-full p-3 rounded-lg focus:outline-none
                ${errors.price
                  ? "border border-red-300 bg-[#fef2f2] focus:border-red-400"
                  : "border border-gray-300 bg-[#fbfcfd] focus:border-[#a4f4cf]"
                }`}
            />
            {errors.price && (
              <p className="text-red-500 text-xs mt-1 mb-2">
                {errors.price}
              </p>
            )}
          </div>

          {/* BUTTONS */}
          <div>
            <button
              type="submit"
              className="w-[75%] bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
            >
              Add Product
            </button>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-[#62748e] py-3 px-8 rounded-lg font-semibold"
            >
              Go Back
            </button>
          </div>

        </form>
      </div>
    </>
  );
}

export default AddProduct;
