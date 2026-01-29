import { Link } from 'react-router-dom'
import { FaBoxArchive } from "react-icons/fa6";

function Navbar() {
    return (
        <>
            <nav className="bg-[#ffffff] border-b border-gray-100 sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center align-middle">
                    <Link to="/" className='text-lg sm:text-xl font-bold text-slate-800 tracking-tight flex items-center gap-2'>
                        <span className="text-blue-600 hover:text-blue-700"><FaBoxArchive /></span>
                        <span className="truncate">StockMaster</span>
                    </Link>


                    <div className='flex items-center ml-4'>
                        <Link to="/add" className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all shadow-md shadow-blue-100 active:scale-95 whitespace-nowrap">
                            <span className="sm:hidden">+ Add</span>
                            <span className="hidden sm:inline">+ Add New Product</span>
                        </Link>
                    </div>
                </div>
            </nav>
           
        </>
    )
}
export default Navbar;