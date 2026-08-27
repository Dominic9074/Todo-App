
import type { TaskInterface } from "../../types/task.interface";

interface TaskItemProps extends TaskInterface{
    deleteTask(taskId:string):void;
    EditTaskBtn(task:object):void;
    TaskCheckbox(itemid:string):void;
}

export default function TaskItem({id,title,deadline,isCompleted,deleteTask,EditTaskBtn,TaskCheckbox}:TaskItemProps){
        const today=new Date().toISOString().split('T')[0];
        const isOverdue = !isCompleted && deadline < today;

    return (
        <div className={`task-item ${isOverdue ? 'overdue-task' : ''}`}>
        {!isOverdue && (
            <input type="checkbox" className="task-item-checkbox" checked={isCompleted} onChange={() => TaskCheckbox(id)}/>
            )}
        
        <h4 style={{textDecoration: isCompleted ? 'line-through' : 'none'}}>{title}</h4>
        <p>Due: {deadline}</p>

        <div className="task-item-buttons">
            <button type="button" onClick={()=>EditTaskBtn({id,title,deadline})}>Edit</button>
            <button type="button" onClick={()=>deleteTask(id)}>Delete</button>
        </div>
        </div>
    )
}

