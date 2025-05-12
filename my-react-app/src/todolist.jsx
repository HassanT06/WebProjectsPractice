import React, { useState } from "react";

function Todolist(){
    //import useState from react to manage state
    const [newTask, setNewTask] = useState(""); //state for the new task input
    const [tasks, setTasks] = useState([]); //state for the list of tasks
    //handle the input change and set the new task state to the value of the input

    const handleInputChange = (event) => { 
        setNewTask(event.target.value);  //update the new task state to the value of the input
    }
    const handleAddTask = () => {
        if (newTask.trim() !== "") { //if input not empty
            setTasks(t => [...t, newTask]); //add the new task to the list of tasks
            setNewTask(""); //clear the input field
        }
    }
    const removeTask = (index) => { 
        setTasks(t => t.filter((_, i) => i !== index)); //remove the task at the index passed in
    }
    //map the task array into a list of li elements

    
    return(
        <div className="todolist">
            <h1 className="title">To Do List</h1>
            <input type="text" placeholder="Add a new task" className="input" value={newTask} onChange={handleInputChange}/>
            <button className="addbtn" onClick={handleAddTask}>Add</button>
            <ol className="list">
                {tasks.map((task, index) => (
                    <li key={index} className="list-item">{task}<button className="remove-button" onClick={()=>removeTask(index)}>✓</button></li>
                ))}
            </ol>
        </div>
     )
}

export default Todolist;