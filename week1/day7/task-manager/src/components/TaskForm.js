import React, {useEffect, useState} from 'react'
import { Task } from '../models/task';

export default function TaskForm(props) {
    const [task, setTask] = useState('');

    useEffect(() => {
        if(props.taskToEdit){
            setTask(props.taskToEdit.task);
        }
    }, [props.taskToEdit]);

    function onTaskFormSubmit(e) {
        e.preventDefault();
        if(!isValid()){
            return;
        }
    
    
    let input_task = new Task(task);
    props.onTaskCreated(input_task);
    clearInputs();
    }

    function isValid(){
        return task !== '';
    }

    function clearInputs(){
        setTask('');
    }

    
  return (
    <div>
      <h1>Task Manager</h1>
      <form id='form' onSubmit={onTaskFormSubmit}>
      <div className="input-group mb-3">
                    <input
                        id="task-input"
                        type="text"
                        className="form-control"
                        placeholder="Enter task here"
                        value ={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button 
                      id="button" 
                      className="btn btn-outline-secondary" 
                      type="submit">
                        +
                      </button>
                </div>
      </form>
    </div>
  )
}
