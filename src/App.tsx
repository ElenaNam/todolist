import React from 'react';
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

    const tasks_1: TaskType[]  = [
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
    ]


    //UI
    return (
        <div className="App">
            < Todolist title={todolistTitle_1}  tasks={tasks_1} />
        </div>
    );
}

export default App;
