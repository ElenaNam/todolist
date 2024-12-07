import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';

export type TaskType = {
	id: number
	title: string
	isDone: boolean
}

export type FilterValueType = 'all' | 'active' | 'completed'

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
			isDone: false
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

	const [filter, setFilter] = useState<FilterValueType>('all');

	const removeTask = (id:number) => {
		const FilteredTasks = tasks.filter(task => task.id !== id);
		setTasks(FilteredTasks);
	}

	const changeFilter = (value: FilterValueType) => {
		setFilter(value);
	}

	let tasksForTodoList = tasks;

	if(filter === 'active') {
		tasksForTodoList = tasks.filter(item => !item.isDone )
	}

	if(filter === 'completed') {
		tasksForTodoList = tasks.filter(item => item.isDone )
	}

	//UI
	return (
		<div className="App">
			< Todolist title={todolistTitle_1}  tasks={tasksForTodoList} removeTask={removeTask} changeFilter={changeFilter} />
		</div>
	);
}

export default App;
