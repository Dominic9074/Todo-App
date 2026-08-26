

export default function TaskItem(){
    return (
        <div className="task-item">
        <input type="checkbox" className="task-item-checkbox" />
        
        <h4>Task Title Goes Here </h4>
        <p>Due: Aug 28</p>

        <div className="task-item-buttons">
            <button type="button">Edit</button>
            <button type="button">Delete</button>
        </div>
        </div>
    )
}

