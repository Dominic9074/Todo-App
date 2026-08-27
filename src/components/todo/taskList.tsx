import type { TaskInterface } from '../../types/task.interface'
import './task.css'
import TaskItem from './taskitem'

interface TaskListProps{
    tasks:TaskInterface[];
    deleteTask(taskId:string):void;
    EditTaskBtn(task:object):void;
    TaskCheckbox(taskId:string):void;
}

function TaskList({tasks,deleteTask,EditTaskBtn,TaskCheckbox}:TaskListProps){
    return (
        <>
        {tasks.map((task)=>(
            <TaskItem id={task.id} title={task.title} deadline={task.deadline} isCompleted={task.isCompleted}
            deleteTask={()=>deleteTask(task.id)} EditTaskBtn={EditTaskBtn} TaskCheckbox={TaskCheckbox}  />
        ))}
        </>
    )
}

export default TaskList


