import React,{useState} from "react";
import "./App.css"
import TaskColumn from './components/TaskColumn'
import TaskForm from './components/TaskForm'

import todoicon from "./assets/direct-hit.png"
import doingicon from "./assets/glowing-star.png"
import doneicon from "./assets/check-mark-button.png"
import { useEffect } from "react";

  const oldTask=localStorage.getItem("tasks");
const App=()=>{
  const [tasks,setTasks]=useState(JSON.parse(oldTask)||[]);
  console.log(tasks);
  useEffect(()=>{localStorage.setItem("tasks",JSON.stringify(tasks))},[tasks])
  const handleDelete=(taskIndex)=>{
   const newTask= tasks.filter((task,Index)=>Index!=taskIndex);
   setTasks(newTask);
  }
  return(
    <div className="app">
     <TaskForm setTasks={setTasks}></TaskForm>
     <main className="app_main">
       <TaskColumn tag="To do" icon={todoicon} tasks={tasks} status="To do" handleDelete={handleDelete}></TaskColumn> 
       <TaskColumn tag="Doing" icon={doingicon} tasks={tasks} status="doing"handleDelete={handleDelete}></TaskColumn>
       <TaskColumn tag="Done" icon={doneicon} tasks={tasks} status="done"handleDelete={handleDelete}></TaskColumn>
     </main>
     </div>
  )
}

export default App;