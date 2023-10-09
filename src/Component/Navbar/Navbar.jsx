
import { useState } from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const [navbar, setNavbar] = useState(false);
    const navitems = <>
        <div className="flex lg:flex-row flex-col gap-7 items-center text-white font-semibold">
            <NavLink to='/' className=''>Home</NavLink>
            <NavLink to='/about' className=''>About</NavLink>
            <NavLink to='/contact' className=''>Contact</NavLink>
            {
                user ? <><NavLink to='/purchase' className=''>Purchase</NavLink>
                    <NavLink to='/story' className=' '>Story</NavLink></> : null
            }
        </div>
    </>


    //Logout section
    const HandelLogout = () => {
        signOutUser()
    }
    return (
        <nav className="w-full bg-purple-500 shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex lg:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 lg:block">
                        <a href="javascript:void(0)">
                        <h3 className="text-3xl font-semibold">ACA<span className="text-[#ff6900]">DREAM</span></h3>
                        </a>
                        <div className="lg:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                            {navitems}
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden">
                            <Link to='/login'
                                href="javascript:void(0)"
                                className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                            >
                                Sign in
                            </Link>
                            <Link to='/register'
                                href="javascript:void(0)"
                                className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                            >
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 lg:inline-block">
                    {
                        user ? <a onClick={HandelLogout}
                            href="javascript:void(0)"
                            className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100 font-semibold"
                        >
                            LogOut
                        </a> : <div><Link to='/login'
                            href="javascript:void(0)"
                            className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 font-semibold"
                        >
                            Sign in
                        </Link>
                            <Link to='/register'
                                href="javascript:void(0)"
                                className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100 font-semibold ml-3"
                            >
                                Sign up
                            </Link></div>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;



