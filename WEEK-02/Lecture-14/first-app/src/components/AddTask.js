const AddTask = () => {
    return (
        <>
        <h3 className="ui heading center">Add New Task</h3>
            <div className="ui form">
                <form>
                    <div className="field">
                        <div className="field">
                            <label>Title</label>
                            <input type="text" spellCheck="false" data-ms-editor="true" placeholder="Task Title" name="title"/>
                        </div>
                        <label>Short Text</label>
                        <textarea rows="2" spellCheck="false" data-ms-editor="true" placeholder="Task Description" name="desciption"></textarea>
                    </div>
                    <button className="ui primary button">Submit</button>
                </form >
            </div>
        </>
    );
};

export default AddTask;