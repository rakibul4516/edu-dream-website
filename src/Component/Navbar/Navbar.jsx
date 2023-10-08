import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
    const {user,signOutUser} = useContext(AuthContext)
    //Logout section
    const HandelLogout = () =>{
        signOutUser()
    }
    const navitems = <>
        <div className="flex gap-7 items-center ">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            {
                user?<><NavLink to='/purchase'>Purchase</NavLink>
                <NavLink to='/contact'>Update Profile</NavLink></>:null
            }
        </div>
    </>
    return (
        <div className="relative">
            <nav className="flex justify-between items-center py-7 shadow-sm w-11/12 mx-auto flex-wrap">
                <h3 className="text-3xl font-semibold">ACA<span className="text-[#ff6900]">DREAM</span></h3>
                <div>
                    {navitems}
                </div>
                <div className="flex gap-2 items-center">
                <img alt="" className="w-12 h-12 rounded-full ri ri dark:bg-gray-500 ri ri" src=''/>
                    {
                        user?<Link to='/login'><button onClick={HandelLogout}>LogOut</button></Link>:<><Link to='/login'><button>Login</button></Link>
                        <Link to='/register'><button>Register</button></Link></>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;