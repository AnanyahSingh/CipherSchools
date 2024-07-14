import { createContext, useState } from "react";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    //state
    const [taskList, setTaskList] = useState([]);//empty array

    //function
    const addNewTask = (task) => {
        setTaskList([...taskList, { ...task, createdDate: new Date() }]);
    };

    return (
        /*whatever info is written between the tag below, will have the JSX 
        value (in the value) shared across*/
        <TaskContext.Provider value={{taskList, addNewTask}}>
            {children}  
            </TaskContext.Provider>
    );
};
export { TaskProvider };
export default TaskContext;