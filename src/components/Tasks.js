import React from 'react' 
import Task from './Task'

// destructure tasks, onDelete from props passed down from App Component 
const Tasks = ({tasks, onDelete, onToggle }) => {

    return (
        // loop through the array and for each item render on DOM 
        <>
        {tasks.map(task => (
            // use key={prop.id} 
            // use Task Component
            <Task key={task.id} task={task} onDelete={()=> onDelete(task.id)} onToggle={onToggle} />
        ))}
        </>
    )
}

// Tasks.defaultProps = {
//     tasks: [
//         {
//             id: 1, 
//             text: 'Doctors Appointment', 
//             day: 'Feb 5th at 2:30pm', 
//             reminder: true 
//         }, 
//         {
//             id: 2,
//             text: 'Meeting at School', 
//             day: 'Feb 6th at 1:30pm', 
//             reminder: true
//         }, 
//         {
//             id: 3, 
//             text: 'Food Shopping', 
//             day: 'Feb 5th at 2:30pm',
//             reminder: false 
//         }
//     ]
// }

export default Tasks 