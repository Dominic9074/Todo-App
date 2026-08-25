import './App.css'
import DotGrid from './components/background/DotGrid.tsx'
import TaskForm from './components/todo/taskForm.tsx';
import TaskList from './components/todo/taskList.tsx';

function App() {
  return(
    <>
      <Background />
      <h2 className='MainHeading share-tech-regular' >TODO APP</h2>
      <TaskForm />
      <div className='TaskLists'>
        <TaskList />
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
