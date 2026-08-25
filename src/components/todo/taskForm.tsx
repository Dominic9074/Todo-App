import './task.css'

function TaskForm(){
    return (
        <div className="taskform">
      <input 
        type="text" 
        className="taskform__input" 
        placeholder="What needs to be done?" 
      />
      <input 
        type="date" 
        className="taskform__date" 
      />
      <button type="button" className="taskform__btn">
        Add
      </button>
    </div>
    )
}

export default TaskForm

