import type { TaskInterface } from '../../types/task.interface'
import './task.css'
import TaskItem from './taskitem'

interface TaskListProps{
    tasks:TaskInterface[];
}

function TaskList({tasks}:TaskListProps){
    return (
        <>
        {tasks.map((task)=>(
            <TaskItem title={task.title} deadline={task.deadline} />
        ))}
        </>
    )
}

export default TaskList


