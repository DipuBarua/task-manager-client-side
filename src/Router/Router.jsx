import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Dashboard from "../Layout/Dashboard";
import CreateTask from "../Pages/Dashboard/CreateTask/CreateTask";
import TaskList from "../Pages/Dashboard/TaskList/TaskList";
import SignUp from "../Pages/SignUp/SignUp";
import LogIn from "../Pages/LogIn/LogIn";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/logIn",
                element: <LogIn></LogIn>
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "createTask",
                element: <CreateTask></CreateTask>
            },
            {
                path: "taskList",
                element: <TaskList></TaskList>
            }
        ]
    }
]);

export default routes;
