import type { TaskInterface } from "../../types/task.interface";

interface TaskItemProps extends TaskInterface{
    deleteTask(taskId:string):void;
    EditTaskBtn(task:object):void;
}

export default function TaskItem({id,title,deadline,deleteTask,EditTaskBtn}:TaskItemProps){
    return (
        <div key={id} className="task-item">
        <input type="checkbox" className="task-item-checkbox" />
        
        <h4>{title}</h4>
        <p>Due: {deadline}</p>

        <div className="task-item-buttons">
            <button type="button" onClick={()=>EditTaskBtn({id,title,deadline})}>Edit</button>
            <button type="button" onClick={()=>deleteTask(id)}>Delete</button>
        </div>
        </div>
    )
}

