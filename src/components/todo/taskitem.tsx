import type { TaskInterface } from "../../types/task.interface";

interface TaskItemProps extends TaskInterface{
    deleteTask(taskId:string):void;
}

export default function TaskItem({id,title,deadline,deleteTask}:TaskItemProps){
    return (
        <div key={id} className="task-item">
        <input type="checkbox" className="task-item-checkbox" />
        
        <h4>{title}</h4>
        <p>Due: {deadline}</p>

        <div className="task-item-buttons">
            <button type="button">Edit</button>
            <button type="button" onClick={()=>deleteTask(id)}>Delete</button>
        </div>
        </div>
    )
}

