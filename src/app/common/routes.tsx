import {createBrowserRouter} from "react-router-dom";
import {lazy} from "react";

const HomeComponent = lazy(() => import("../pages/home"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeComponent/>,
    },
]);

export default router;