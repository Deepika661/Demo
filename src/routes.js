import React from "react";
import { routePath } from "./constants/routes";

const Home = React.lazy(() => import("../views/Home/Home"));

const Consumer = [
    {
        path: routePath.HOME,
        exact: true,
        name: "HOME",
        component: Home,
    }
]
let routes = { Consumer, Admin };

export default routes;