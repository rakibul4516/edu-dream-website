import { HiAcademicCap,HiUsers,HiViewColumns,HiOutlineGlobeAmericas } from "react-icons/hi2";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Achivement = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <section data-aos="flip-up" style={{backgroundImage:`url('https://i.ibb.co/hyKtCXJ/pexels-andrea-piacquadio-3769021.jpg')`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className="text-gray-600 body-font w-full h-full object-center">
            <div className="container px-10 lg:py-32 bg-black bg-opacity-50 h-full">
                <div className="text-center p-4">
                    <h4 className="text-xl font-semibold text-slate-300">The Best Choice</h4>
                    <h1 className="text-3xl font-semibold  text-white">Our Achivement</h1>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 items-center md:justify-between justify-center py-5" >
                    <div className="flex flex-col items-center">
                        <HiUsers className="text-6xl mx-auto text-green-400"></HiUsers>
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">2563</h2>
                        <p className="leading-relaxed text-white">LEARNERS EDUCATED</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <HiAcademicCap className="text-6xl mx-auto text-green-400"></HiAcademicCap>
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">52356</h2>
                        <p className="leading-relaxed text-white">GRADUATES</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <HiOutlineGlobeAmericas className="text-6xl mx-auto text-green-400"></HiOutlineGlobeAmericas>
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">9584</h2>
                        <p className="leading-relaxed text-white">GLOBAL LEARNERS</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <HiViewColumns className="text-6xl mx-auto text-green-400"></HiViewColumns>
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">684</h2>
                        <p className="leading-relaxed text-white">TOTAL EVENTS</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achivement;