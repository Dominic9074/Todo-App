import './task.css'
import { useState } from 'react';

interface TaskFormProps{
    addTask(title:string,deadline:string):void;
}

function TaskForm({addTask}:TaskFormProps){
    const [title,setTitle]=useState<string>('');
    const [deadline,setDeadline]=useState<string>('')

    function handleAddBtn(){
        if(title.trim().length<4){
            console.log('enter a valid todo')
            return;
        }
        if(deadline.length < 4){
            console.log('choose a valid date')
        }
        addTask(title,deadline)
    }

    return (
        <div className="taskform">
        <input  type="text"  className="taskform__input"  placeholder="What needs to be done?" 
        onChange={(e)=>setTitle(e.target.value)}/>
        <input 
            type="date" className="taskform__date" onChange={(e) => setDeadline(e.target.value)} min={new Date().toISOString().split('T')[0]}
        />
        <button type="button" className="taskform__btn" onClick={handleAddBtn}>
            Add
        </button>
        </div>
    )
}

export default TaskForm

