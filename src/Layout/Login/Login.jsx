import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { HiEye,HiOutlineEyeSlash } from "react-icons/hi2";
import swal from 'sweetalert';
import { FcGoogle } from "react-icons/fc";
const Login = () => {
    const [findError, setFindError] = useState('')
    const [isView,setIsView] = useState(false)
    const { LoginUser, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handelLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setFindError('')
        //Login section
        LoginUser(email, password)
            .then(() => {
                swal("Yes!", "Login Successfully", "success");
                navigate('/')
                e.target.reset()
            })
            .catch(error => {
                setFindError(error.message)
            })
    }

    //Login with google 
    const handelGoogleLogin = () => {
        googleLogin()
            .then(()=> {
                swal("Yes!", "Created Successfully", "success");
                navigate(location?.state? location.state: '/');
            }) 
            .catch(error => {
                setFindError(error.message)
            })
    }


    return (
        <div style={{ backgroundImage: `url('https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg')` }} className="h-full object-cover w-full py-16 px-4">
            <div className="flex flex-col items-center justify-center">

                <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                    <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl text-center font-extrabold leading-6 text-gray-800">
                        Sign In
                    </p>

                    <form onSubmit={handelLogin}>
                        <div>
                            <lable className="text-sm font-medium leading-none text-gray-800">Email</lable>
                            <input name="email" placeholder="Email" type="email" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" required/>
                        </div>
                        <div className="mt-2  w-full">
                            <lable className="text-sm font-medium leading-none text-gray-800">Password</lable>
                            <div className="relative flex items-center justify-center">
                                <input name="password" placeholder="Password" type={isView?"text":"password"} className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" required/>
                                <div onClick={()=>setIsView(!isView)} className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                    {!isView ?<HiEye ></HiEye>:<HiOutlineEyeSlash></HiOutlineEyeSlash>}
                                </div>
                            </div>
                        </div>
                        <p className="text-red-500 text-xs pt-2">{findError}</p>
                        <div className="mt-8">
                            <button type="submit" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                                Create account
                            </button>
                        </div>
                    </form>
                    <div className="w-full flex items-center justify-between py-5">
                        <hr className="w-full bg-gray-400" />
                        <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                        <hr className="w-full bg-gray-400  " />
                    </div>

                    <button aria-label="Continue with google" role="button" className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-5">
                        <FcGoogle className="text-xl"></FcGoogle>
                        <p onClick={handelGoogleLogin} className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
                    </button>
                    <p className="text-sm mt-4 font-medium leading-none text-gray-500">
                        New here? Please{" "}
                        <Link to='/register'>
                            <span tabIndex={0} role="link" aria-label="Sign up here" className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                                {" "}
                                Sign up here
                            </span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login 