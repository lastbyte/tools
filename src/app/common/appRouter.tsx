import React from "react";
import {RouterProvider} from "react-router-dom";
import router from "@common/routes";

interface AppRouterProps {

}

const AppRouter: React.FC<AppRouterProps> = (props: AppRouterProps) => {
    return <RouterProvider router={router}/>;
}
export default AppRouter;