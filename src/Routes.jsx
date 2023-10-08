import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "./Layout/Login/Login";
import Register from "./Layout/Register/Register";
import About from "./Layout/About/About";
import Contact from "./Layout/Contact/Contact";
import Home from "./Layout/Home/Home";
import EventDetails from "./Component/EventDetails";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import ErrorPage from "./Component/ErrorPage/ErrorPage";
import PurchaseItem from "./Component/PurchaseItem/PurchaseItem";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage/>,
        children: [

            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/details/:id',
                element: <PrivateRoute>
                    <EventDetails></EventDetails>
                </PrivateRoute>,
            },
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/purchase',
                element: <PrivateRoute>
                    <PurchaseItem></PurchaseItem>
                    </PrivateRoute>,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ]
    },


])

export default Routes;