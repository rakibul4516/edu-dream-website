import { Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";

const Root = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;