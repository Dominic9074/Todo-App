import './App.css'
import DotGrid from './components/background/DotGrid.tsx'
import TaskForm from './components/todo/taskForm.tsx';
import TaskList from './components/todo/taskList.tsx';
import type{ TaskInterface } from './types/task.interface.ts';
import { useState } from 'react';

function App() {

  const [task,setTask]=useState<TaskInterface[]>([])

  function addTask(title:string,deadline:string){
    console.log('task added',{title,deadline})
    setTask((prevTask)=>[...prevTask,{title,deadline}])
  }

  return(
    <>
      <Background />
      <h2 className='MainHeading share-tech-regular' >TODO APP</h2>
      <TaskForm addTask={addTask} />
      <div className='TaskLists'>
        <TaskList task={task} />
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
