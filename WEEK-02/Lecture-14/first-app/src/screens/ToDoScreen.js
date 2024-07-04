import { useState } from "react";
import Task from "../components/task";

/*class ToDoScreen extends Component {
state = {
    taskCount: 0,
};
    
    render() {
        return (
            <div className="screen">
                <h1 className="ui-heading center">To-Do List</h1>
                <div>
                    <button onClick={(e) => 
                    {
                        this.setState({...this.state, taskCount: this.state.taskCount + 1,});
                        console.log(this.state.taskCount);
                    }
                    } className="ui secondary button">Add Task</button>
                    <p>Number of tasks: {this.state.taskCount} </p>
                </div>
            </div>
        );
    }
}*/

const ToDoScreen = () => {
    const[taskList,setTaskList]=useState([]);
    return(
        <div className="screen">
        <h1 className="ui-heading center">To-Do List</h1>
        <div>
            <button onClick={(e) => 
            {
                setTaskList([...taskList,{
                    title: "Go to gym",
                    description: "Going to gym is good for muscle growth.",
                },
            ]);
            }}
            className="ui secondary button">Add Task</button>
            {taskList.map((task) =>(<Task/>))}
        </div>
    </div>
    );
}
export default ToDoScreen;
