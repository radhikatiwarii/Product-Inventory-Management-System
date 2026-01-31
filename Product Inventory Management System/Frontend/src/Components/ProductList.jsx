import { FaEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";

function ProductList({ products, onDelete, onEdit }) {
  return (
    <div className="bg-white rounded-2xl mx-4 sm:mx-10 border border-gray-100 shadow-xl shadow-slate-200/50 overflow-hidden">
       <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] sm:min-w-full text-left">
          <thead>
            <tr className="bg-slate-50/70 border-b border-gray-100">
              <th className="px-4 sm:px-8 py-4 sm:py-6 text-xs sm:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                Product ID
              </th>
              <th className="px-4 sm:px-8 py-4 sm:py-6 text-xs sm:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                Name
              </th>
              <th className="px-4 sm:px-8 py-4 sm:py-6 text-xs sm:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                Category
              </th>
              <th className="px-4 sm:px-8 py-4 sm:py-6 text-xs sm:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                Price
              </th>
              <th className="px-4 sm:px-8 py-4 sm:py-6 text-xs sm:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none text-right">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50/50">
            {products.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-4 sm:px-8 py-4 text-center text-slate-400 text-sm sm:text-base">
                  No products found
                </td>
              </tr>
            ) : (
              products.map((product,index) => (
                <tr key={product._id} className="hover:bg-slate-50 transition">
                  <td className="px-4 sm:px-8 py-3 sm:py-5 text-sm sm:text-base text-slate-600 font-medium">
                    {index+1}
                  </td>
                  <td className="px-4 sm:px-8 py-3 sm:py-5 text-sm sm:text-base font-semibold text-slate-800">
                    {product.name}
                  </td>
                  <td className="px-4 sm:px-8 py-3 sm:py-5 text-sm sm:text-base text-slate-600">
                    {product.category}
                  </td>
                  <td className="px-4 sm:px-8 py-3 sm:py-5 text-sm sm:text-base font-semibold text-slate-700">
                    ₹ {product.price}
                  </td>
                  <td className="px-4 sm:px-8 py-3 sm:py-5 text-right space-x-2 sm:space-x-3">
                    <button
                      onClick={() => onEdit(product)}
                      className="text-slate-500 font-semibold hover:text-green-500"
                    >
                      <FaEdit className="text-sm sm:text-base" />
                    </button>
                    <button
                      onClick={() => onDelete(product._id)}
                      className="text-slate-500 font-semibold hover:text-red-500"
                    >
                      <MdAutoDelete className="text-sm sm:text-base" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;