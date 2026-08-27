import './App.css'
import DotGrid from './components/background/DotGrid.tsx'
import EditTaskModel from './components/todo/EditTaskModel.tsx';
import TaskForm from './components/todo/taskForm.tsx';
import TaskList from './components/todo/taskList.tsx';
import type{ TaskInterface } from './types/task.interface.ts';
import { useState,useEffect } from 'react';
import {Toaster} from 'react-hot-toast'
import toast from 'react-hot-toast';


function App() {

  const [task,setTask]=useState<TaskInterface[]>(()=>{
    const savedTask=localStorage.getItem('tasks');

    return savedTask? JSON.parse(savedTask) : [];
  })

  const [isEditable,setIsEditable]=useState<boolean>(false)
  const [editTask,setEditTask]=useState<TaskInterface | null>(null)

  function addTask(title:string,deadline:string){
    const isCompleted=false
    console.log('task added',{title,deadline})
    setTask((prevTask)=>[...prevTask,{id:crypto.randomUUID(),title,deadline,isCompleted}])
  }

  function deleteTask(taskId:string){
    setTask((prevTask)=>prevTask.filter((task)=>task.id!==taskId))
  }

  function EditTaskBtn({id,title,deadline,isCompleted}:TaskInterface){
    setIsEditable(true);
    setEditTask({id,title,deadline,isCompleted})
  }

  function EditCancelBtn(){
    setIsEditable(false);
    setEditTask(null);
  }

  function UpdateTask(updatedTask:TaskInterface){
    setTask(prevTask=>prevTask.map((task)=>
    task.id === updatedTask.id ? updatedTask : task
    ))
    setIsEditable(false)
  }

  function TaskCheckbox(taskId: string) {
    setTask((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? { ...task, isCompleted: !task.isCompleted }: task
      )
    );
  }

  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(task))
  },[task])

 useEffect(() => {
    const today = new Date().toISOString().split('T')[0];

    task.forEach((item) => {
      if (!item.isCompleted && item.deadline < today) {
        toast.error(`Task "${item.title}" is overdue!`, {
          id: `overdue-${item.id}`,
        });
      }
    });
  }, []);

  return(
    <>
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: '#1f1e24',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }
        }} 
      />
      <Background />
      <h2 className='MainHeading share-tech-regular' >TODO APP</h2>
      <TaskForm addTask={addTask} />
      <div className='TaskLists'>
        <TaskList tasks={task} deleteTask={deleteTask} EditTaskBtn={EditTaskBtn} TaskCheckbox={TaskCheckbox} />
      </div>
      {isEditable?(<EditTaskModel EditTask={editTask} EditCancelBtn={EditCancelBtn} UpdateTask={UpdateTask} />):null}
    </>
  )
}

function Background() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,             
        pointerEvents: 'none',  
        overflow: 'hidden',
      }}
    >
      <DotGrid
        dotSize={5}
        gap={15}
        baseColor="#e4e3e9"
        activeColor="#00ff96"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={550}
        returnDuration={1.5}
      />
    </div>
  );
}

export default App
