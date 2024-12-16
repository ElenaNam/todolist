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
	addTask: (title: string) => void
	changeFilter: (value: FilterValuesType) => void
	changeStatus: (id: string) => void
	status: FilterValuesType
};

export const Todolist = ({ title, tasks, removeTask, addTask, changeFilter, status, changeStatus }: TodolistPropsType) => {
	return (
		<div className="todolist">
			<div className="todolist__wrapper">
				<TodolistHeader title={title}/>
				<AddForm addTask={addTask} />
				<Tasks tasks={tasks} status={status} removeTask={removeTask}changeStatus={changeStatus}/>
				<FilterButtons changeFilter={changeFilter} />
			</div>
		</div>
	);
};
