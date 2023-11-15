import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import Cart from "../Dashboard/Cart/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <Menu />
            },
            {
                path: "/order/:category",
                element: <Order />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard/>,
        children:[
            {
             path:"cart"   ,
             element:<Cart/>
            }
        ]
    }
]);

export default router;