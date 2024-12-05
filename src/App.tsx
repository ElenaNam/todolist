import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    //BLL
    const todolistTitle_1 = "What to learn 1"

    const [tasks, setTasks] = useState<TaskType[]>([
        {
            id: 0,
            title: "HTML&CSS", 
            isDone: true
        },
        {
            id: 1,
            title: "JS", 
            isDone: true
        },
        {
            id: 2,
            title: "React", 
            isDone: false
        },
        {
            id: 3,
            title: "Styled Components", 
            isDone: true
        },
    ]);

    const removeTask = (id:number) => {
        const FilteredTasks = tasks.filter(task => task.id !== id);
        setTasks(FilteredTasks);
    }

    //UI
    return (
        <div className="App">
            < Todolist title={todolistTitle_1}  tasks={tasks} removeTask={removeTask} />
        </div>
    );
}

export default App;
