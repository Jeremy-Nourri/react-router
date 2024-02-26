import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Form from "../components/Form";
import ErrorPage from "../components/ErrorPage";
import App from "../App";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children : [
            { path: "/", element: <Home /> },
            { path: "/form/:monparams", element: <Form /> }
        ]
    }
])

export default router;