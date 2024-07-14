import ToDoScreen from "./screens/ToDoScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddTask from "./components/AddTask";
import { TaskProvider } from "./context/TaskContext"; // Import TaskProvider

const router = createBrowserRouter([
    {
        path: "/",
        element: <ToDoScreen />,
    },
    {
        path: "/add-task",
        element: <AddTask />,
    },
]);

const App = () => {
    return (
        <TaskProvider>
            <RouterProvider router={router} />
        </TaskProvider>
    );
};

export default App;
