
import type { TaskInterface } from '../../types/task.interface';
import './task.css'

interface EditModelTaskProps{
    EditCancelBtn():void;
    EditTask:TaskInterface
}

export default function EditTaskModel({EditCancelBtn,EditTask}:EditModelTaskProps){

    return(
        <div className="modal-overlay">
        <div className="edit-modal">
            <h2>Edit Task</h2>

            <div className="input-group">
            <label>Title</label>
            <input type="text" value={EditTask.title} />
            </div>

            <div className="input-group">
            <label>Deadline</label>
            <input type="date" value={EditTask.deadline} />
            </div>

            <div className="modal-actions">
            <button className="cancel-btn" onClick={EditCancelBtn}>Cancel</button>
            <button className="update-btn">Update</button>
            </div>
        </div>
        </div>
    )
}



