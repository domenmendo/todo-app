import React from "react";

function Task({task,onDelete}){
    return (
        <div className="task-box">
            <p>
                {task}
            </p>
            <button className="btn btn-primary" onClick={onDelete}>Delete</button>
        </div>
    );
}

export default Task;