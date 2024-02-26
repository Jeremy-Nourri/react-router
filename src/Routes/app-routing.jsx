import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import About from  "../components/About";
import ErrorPage from "../components/ErrorPage";
import App from "../App";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children : [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/contact", element: <Contact /> }
        ]
    }
])

export default router;