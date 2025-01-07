import React from "react";
import { FilterValuesType, TaskType, TodolistType } from "../../App";
import { TodolistHeader } from "../TodolistHeader/TodolistHeader";
import { AddForm } from "../AddForm/AddForm";
import { FilterButtons } from "../FilterButtons/FilterButtons";
import { Tasks } from "../Tasks/Tasks";
import { Button } from "../button/Button";

type TodolistPropsType = {
	todolist: TodolistType
	tasks: TaskType[]
	removeTask: (todolistId: string, id: string) => void
	addTask: (todolistId: string, title: string) => void
	changeFilter: (todolistId: string, value: FilterValuesType) => void
	changeStatus: (todolistId: string, id: string, newStatus: boolean) => void
	deleteTodolist: (todolistId: string) => void
};

export const Todolist = ({ todolist: {id, title, filter}, tasks, removeTask, addTask, changeFilter, changeStatus, deleteTodolist }: TodolistPropsType) => {
	const deleteTodolistHandler = () => {
		deleteTodolist(id);
	}
	return (
		<div className="todolist">
			<div className="todolist__wrapper">
				<div className="todolist__header">
					<TodolistHeader title={title}/>
					<Button 
						title={'x'} 
						className="btn-delete"
						onClickHandler={deleteTodolistHandler}
						ariaLabel="delete todolist"
					/>
				</div>
				<AddForm 
					todolistId={id}
					addTask={addTask} 
				/>
				<Tasks 
					todolistId={id}
					tasks={tasks} 
					status={filter} 
					removeTask={removeTask} 
					changeStatus={changeStatus}
				/>
				<FilterButtons status={filter} changeFilter={changeFilter} todolistId={id} />
			</div>
		</div>
	);
};
