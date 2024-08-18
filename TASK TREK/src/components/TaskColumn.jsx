import React from 'react'
import './TaskColumn.css'
import TaskCard from './TaskCard'

const TaskColumn = ({tag,icon,tasks,status,handleDelete}) => {
  return (
     <section className="task_Column">
        <h2 className='task_column-heading'>
            <img className="task_column_icon" src={icon} alt=""/>{tag}
        </h2>
        {
          tasks.map((task,index)=>task.status===status&&<TaskCard key={index} title={task.task} tags={task.tags} handleDelete={handleDelete} index={index}></TaskCard>)
        }
    </section>
  )
}

export default TaskColumn

