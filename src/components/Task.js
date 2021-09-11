import React from 'react' 
import { FaTimes } from 'react-icons/fa' 

// destructure task from prop passed down from Tasks Component 
const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`Task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text} 
                <FaTimes 
                    style={{color:'red', cursor: 'pointer'}} 
                    onClick={onDelete} 
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task 