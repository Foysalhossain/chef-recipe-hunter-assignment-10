import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import ServicesLayout from "../pages/ServicesLayout/ServicesLayout";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import LoginLayout from "../pages/LoginLayout/LoginLayout";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: 'services',
        element: <ServicesLayout></ServicesLayout>,
        children: [
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: ':id',
                element:
                    <PrivateRoute>
                        <ServiceDetails></ServiceDetails>
                    </PrivateRoute>
            }
        ]
    }
]);

export default router;