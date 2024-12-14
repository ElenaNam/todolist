import React from "react";
import { FilterValuesType, TaskType } from "./App";
import { TodolistHeader } from "./TodolistHeader";
import { AddForm } from "./AddForm";
import { FilterButtons } from "./FilterButtons";
import { Tasks } from "./Tasks";

type TodolistPropsType = {
	title: string
	tasks: TaskType[]
	removeTask: (id: string) => void
	addTask: (task: TaskType) => void
	changeFilter: (value: FilterValuesType) => void
	status: FilterValuesType
};

export const Todolist = ({ title, tasks, removeTask, addTask, changeFilter, status }: TodolistPropsType) => {
	return (
		<div className="todolist">
			<TodolistHeader title={title}/>
			<AddForm addTask={addTask} />
			<Tasks tasks={tasks} status={status} removeTask={removeTask} />
			<FilterButtons changeFilter={changeFilter} />
		</div>
	);
};
