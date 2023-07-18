import React from 'react'

export default function TaskTable(props) {
    console.log(props.tasks);
  return (
    <div>
        <table className='table mt-5'>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Complete</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id='table-body'>
                {
                    props.tasks.map((task) => {
                        return <tr key={task.task}>
                            <td>{task.task}</td>
                            <td>
                            <div class="radio">
                                <input type="radio"/>
                            </div>
                            </td>
                            <td>
                                <button 
                                    className='btn btn-danger me-1' 
                                    onClick={() => props.onTaskDelete(task)}
                                >Delete
                                </button>
                                <button 
                                    className='btn btn-warning ms-1'
                                    onClick={() => props.onTaskEdit(task)}
                                    >Edit
                                </button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}


