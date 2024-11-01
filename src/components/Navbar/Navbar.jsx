import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="bg-white shadow-lg fixed top-0 right-0 left-0">
            <div className="flex items-center justify-between max-w-7xl md:mx-auto py-4 mx-5">
                <div onClick={()=>setIsOpen(!isOpen)} className="text-2xl md:hidden">
                    {
                        isOpen ? <FaTimes /> : <FaBars />
                    }
                    
                </div>
                <div>
                    <h3 className="font-bold text-3xl text-[#131313] hidden md:block">Book Vibe</h3>
                </div>
                <ul className={`md:flex items-center gap-6 md:static duration-1000
                    ${isOpen ? 'top-24': '-top-48'}
                     absolute bg-white p-4 md:p-0 rounded-lg`}>
                    <NavLink to= '/'><li className="text-xl font-normal text-[#131313] opacity-80">Home</li></NavLink>
                    <NavLink to= '/books'><li className="text-xl font-normal text-[#131313] opacity-80">Listed Books</li></NavLink>
                    <NavLink to= '/pages'><li className="text-xl font-normal text-[#131313] opacity-80">Page to Read</li></NavLink>
                </ul>
                <div className="flex items-center gap-4">
                    <NavLink to='/signin'><button className="text-xl text-white rounded-lg font-semibold px-4 py-3 bg-[#23BE0A]">Sign In</button></NavLink>
                    <NavLink to='/signUp'><button className="text-xl text-white rounded-lg font-semibold px-4 py-3 bg-[#59C6D2]">Sign Up</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;