import React, { useState } from "react";

const AddTask = ({ onSubmit }) => {
    const [task, setTask] = useState({
        title: "",
        description: "",
    });

    const handleInputChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        onSubmit(task);
        setTask({
            title: "",
            description: "",
        });
    };

    return (
        <section className="screen">
            <h3 className="ui heading center">Add New Task</h3>
            <div className="ui form">
                <form onSubmit={onFormSubmit}>
                    <div className="field">
                        <div className="field">
                            <label>Title</label>
                            <input
                                type="text"
                                spellCheck={false}
                                placeholder="Task Title"
                                name="title"
                                onChange={handleInputChange}
                                value={task.title}
                            />
                        </div>
                        <label>Description</label>
                        <textarea
                            rows="2"
                            spellCheck={false}
                            placeholder="Task Description"
                            name="description"
                            onChange={handleInputChange}
                            value={task.description}
                        ></textarea>
                    </div>
                    <button type="submit" className="ui primary button">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddTask;
