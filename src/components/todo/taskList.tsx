import type { TaskInterface } from '../../types/task.interface'
import './task.css'
import TaskItem from './taskitem'

interface TaskListProps{
    tasks:TaskInterface[];
    deleteTask(taskId:string):void;
}

function TaskList({tasks,deleteTask}:TaskListProps){
    return (
        <>
        {tasks.map((task)=>(
            <TaskItem id={task.id} title={task.title} deadline={task.deadline} deleteTask={()=>deleteTask(task.id)} />
        ))}
        </>
    )
}

export default TaskList


