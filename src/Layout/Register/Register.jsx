import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { HiEye } from "react-icons/hi2";
function Register() {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { RegisterUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handelRegister = e => {
        e.preventDefault();
        const getName = e.target.name.value;
        setName(getName)
        const getImage = e.target.image.value;
        setImage(getImage)
        const getEmail = e.target.email.value;
        setEmail(getEmail)
        const getPassword = e.target.password.value;
        setPassword(getPassword)

        //Register here 
        RegisterUser(email,password)
            .then((userCredential) => {
                const user = userCredential.user;
                let displayName = user.displayName;
                let photoUrl = user.photoURL;
                displayName = name;
                photoUrl = image;
                console.log(displayName)
                console.log(photoUrl)
                navigate('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                
            });

    }



    return (
        <div style={{ backgroundImage: `url('https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg')` }} className="h-full object-cover w-full py-16 px-4">
            <div className="flex flex-col items-center justify-center">

                <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                    <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl text-center font-extrabold leading-6 text-gray-800">
                        Sign up
                    </p>

                    <form onSubmit={handelRegister}>
                        <div>
                            <lable className="text-sm font-medium leading-none text-gray-800">Your Name</lable>
                            <input name="name" placeholder="Name" type="text" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                        </div>
                        <div>
                            <lable className="text-sm font-medium leading-none text-gray-800">Profile Picture</lable>
                            <input name="image" placeholder="Image Link" type="text" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                        </div>
                        <div>
                            <lable className="text-sm font-medium leading-none text-gray-800">Email</lable>
                            <input name="email" placeholder="Email" type="email" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                        </div>
                        <div className="mt-2  w-full">
                            <lable className="text-sm font-medium text-gray-800">Password</lable>
                            <div className="relative flex items-center justify-center">
                                <input name="password" placeholder="Password" type="password" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                                <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                    <HiEye></HiEye>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <button type="submit" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                                Create account
                            </button>
                        </div>
                    </form>
                    <p className="text-sm mt-4 font-medium leading-none text-gray-500">
                        Already have an account?{" "}
                        <Link to='/login'>
                            <span tabIndex={0} role="link" aria-label="Sign up here" className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                                {" "}
                                Sign In here
                            </span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;