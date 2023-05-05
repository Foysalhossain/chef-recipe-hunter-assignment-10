import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
// import ServicesLayout from "../pages/ServicesLayout/ServicesLayout";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import LoginLayout from "../pages/LoginLayout/LoginLayout";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
// import Services from "../pages/Services/Services";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'allData/:id',
                element:
                    <PrivateRoute>
                        <ServiceDetails></ServiceDetails>
                    </PrivateRoute>,
                loader: ({ params }) => fetch(`https://chef-recipe-hunter-server-foysalhossain.vercel.app/allData/${params.id}`)
            },
            {
                path: 'loader',
                element: <LoadingSpinner></LoadingSpinner>
            },
        ]
    },

]);

export default router;