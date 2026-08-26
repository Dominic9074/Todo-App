
import type { TaskInterface } from '../../types/task.interface';
import './task.css'
import { useState } from 'react';
import toast from 'react-hot-toast';

interface EditModelTaskProps{
    EditCancelBtn():void;
    EditTask:TaskInterface;
    UpdateTask(UpdatedTask:TaskInterface):void;
}

export default function EditTaskModel({EditCancelBtn,EditTask,UpdateTask}:EditModelTaskProps){

    const [title,setTitle]=useState<string>(EditTask.title);
    const [deadline,setDeadline]=useState<string>(EditTask.deadline)

    function handleUpdate(){
        if(title.trim().length<4){
            toast.error('Enter a valid Todo')
            return;
        }
        if(deadline.length < 4){
           toast.error('Choose a valid date')
           return;
        }
        const UpdatedTask:TaskInterface={
            ...EditTask,
            title:title,
            deadline:deadline
        }
        UpdateTask(UpdatedTask)
    }

    return(
        <div className="modal-overlay">
        <div className="edit-modal">
            <h2>Edit Task</h2>

            <div className="input-group">
            <label>Title</label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
            </div>

            <div className="input-group">
            <label>Deadline</label>
            <input type="date" value={EditTask.deadline} onChange={(e)=>setDeadline(e.target.value)} min={new Date().toISOString().split('T')[0]} />
            </div>

            <div className="modal-actions">
            <button className="cancel-btn" onClick={EditCancelBtn}>Cancel</button>
            <button className="update-btn" onClick={handleUpdate} >Update</button>
            </div>
        </div>
        </div>
    )
}



