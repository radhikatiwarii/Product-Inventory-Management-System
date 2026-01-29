function ProductList({ products, onDelete, onEdit }) {
    return (
        <>
            <div className="bg-white rounded-[2.5rem] mx-10 border border-gray-100 shadow-2xl shadow-slate-200/50 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left ">
                        <thead>
                            <tr className="bg-slate-50/70 border-b border-gray-100">
                                <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                                    Product_id
                                </th>
                                <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                                    Product Name
                                </th>
                                <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                                    Category
                                </th>

                                <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                                    Price
                                </th>

                                <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none text-right">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50/50">
                            {products.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="px-8 py-6 text-center text-slate-400">
                                        No products found
                                    </td>
                                </tr>
                            ) : (
                                products.map((product) => (
                                    <tr key={product.id} className="hover:bg-slate-50 transition">
                                        <td className="px-8 py-5 text-sm text-slate-600 font-medium">
                                            {product.id}
                                        </td>

                                        <td className="px-8 py-5 text-sm font-semibold text-slate-800">
                                            {product.name}
                                        </td>

                                        <td className="px-8 py-5 text-sm text-slate-600">
                                            {product.category}
                                        </td>

                                        <td className="px-8 py-5 text-sm font-semibold text-slate-700">
                                            ₹ {product.price}
                                        </td>

                                        <td className="px-8 py-5 text-right space-x-3">
                                            <button
                                                onClick={() => onEdit(product)}
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                Edit
                                            </button>

                                            <button
                                                onClick={() => onDelete(product.id)}
                                                className="text-red-600 font-semibold hover:underline"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>


                    </table>
                </div>
            </div>
        </>
    )
}
export default ProductList;