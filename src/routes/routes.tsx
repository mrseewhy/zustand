import App from "@/App";
import Cart from "@/components/Cart";
import Layout from "@/components/Layout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/', element: <Layout />, children: [
            { path: '', element: <App /> },
            { path: 'cart', element: <Cart /> },
        ]
    }
])