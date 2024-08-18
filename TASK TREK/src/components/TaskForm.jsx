import React ,{useState}from 'react'
import Tag from './Tag.jsx'
import "./TaskForm.css"


const TaskForm = ({setTasks}) => {
     const [taskData,setTaskData]=useState({
        task:"",
        status:"To do",
        tags:[]
     })
    const checkTag =(tag)=>{
       return taskData.tags.some(item=>item===tag)
    }
     const handleChange=(e)=>{
        const {name,value}=e.target;
      /* const name=e.target.name;
       const value=e.target.value;*/
       setTaskData(prev=>{
        return {...prev,[name]:value}
       })
     }
     const selectTag=(tag)=>
     {
        if(taskData.tags.some(item=>item===tag))
        {
            const filterTags=taskData.tags.filter(item=>item!=tag);
            setTaskData(prev=>{
                return {...prev,tags:filterTags};
            })
        }
        else
        {
            setTaskData(prev=>{
                return {...prev,tags:[...prev.tags,tag]};
            })
        }
     }
     const handleSubmit =(e)=>
     {
        e.preventDefault();
        console.log(taskData);
        setTasks(prev=>{ 
            return [...prev,taskData];
        })
        setTaskData({
            task:"",
            status:"To do",
            tags:[]
         })
     }
    
   /* const[task,setTask]=useState("");
    const[status,setStatus]=useState("todo");
    const handleTaskChange=(e)=>
    {
        setTask(e.target.value);
    }
    const handleStatusChange=(e)=>
    {
        setStatus(e.target.value);
    }*/
   // console.log(task,status);
  return (
    <div>
        <header className='app_header'>
            <form onSubmit={handleSubmit}>
                <input  type="text"
                name="task"
                value={taskData.task}
                 className='Task_Input' 
                 placeholder='Enter the Task'
                 onChange={handleChange}></input>
                <div className='Task_Form_Bottom_Line'>
                    <div>
                       <Tag tagName="HTML" selectTag={selectTag} selected={checkTag("HTML")}></Tag>
                       <Tag tagName="CSS" selectTag={selectTag} selected={checkTag("CSS")}></Tag>
                       <Tag tagName="JAVASCRIPT" selectTag={selectTag} selected={checkTag("JAVASCRIPT")}></Tag>
                       <Tag tagName="REACT" selectTag={selectTag} selected={checkTag("REACT")}></Tag>
                    </div>
                    <div>
                    <select 
                    name="status"
                    value={taskData.status}
                    className='task_status' 
                    onChange={handleChange}>
                        <option value="todo"> TO DO</option>
                        <option value="doing"> DOING</option>
                        <option value="done">Done</option>
                    </select>
                    <button type="submit" className='task_Submit'>+Add Task</button>
                    </div>
                </div>
            </form>
        </header>
    </div>
  )
}

export default TaskForm