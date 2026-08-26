import type { TaskInterface } from "../../types/task.interface";



export default function TaskItem({title,deadline}:TaskInterface){
    return (
        <div className="task-item">
        <input type="checkbox" className="task-item-checkbox" />
        
        <h4>{title}</h4>
        <p>Due: {deadline}</p>

        <div className="task-item-buttons">
            <button type="button">Edit</button>
            <button type="button">Delete</button>
        </div>
        </div>
    )
}

