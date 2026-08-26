import './App.css'
import DotGrid from './components/background/DotGrid.tsx'
import TaskForm from './components/todo/taskForm.tsx';
import TaskList from './components/todo/taskList.tsx';
import type{ TaskInterface } from './types/task.interface.ts';
import { useState,useEffect } from 'react';
import {Toaster} from 'react-hot-toast'


function App() {

  const [task,setTask]=useState<TaskInterface[]>(()=>{
    const savedTask=localStorage.getItem('tasks');

    return savedTask? JSON.parse(savedTask) : [];
  })

  function addTask(title:string,deadline:string){
    console.log('task added',{title,deadline})
    setTask((prevTask)=>[...prevTask,{id:crypto.randomUUID(),title,deadline}])
  }

  function deleteTask(taskId:string){
    setTask((prevTask)=>prevTask.filter((task)=>task.id!==taskId))
  }

  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(task))
  },[task])

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
        <TaskList tasks={task} deleteTask={deleteTask}/>
      </div>
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
