import { Component } from "react";
import ToDoScreen from "./screens/ToDoScreen";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AddTask from "./components/AddTask";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ToDoScreen />,
    },
    {
        path:"/add-task",
        element: <AddTask />,
    },
]);
const App = () => {
    return<RouterProvider router={router}/>;
};
export default App;
