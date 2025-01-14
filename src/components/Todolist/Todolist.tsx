import React from "react";
import { FilterValuesType, TaskType, TodolistType } from "../../App";
import { TodolistHeader } from "../TodolistHeader/TodolistHeader";
import { FilterButtons } from "../FilterButtons/FilterButtons";
import { Tasks } from "../Tasks/Tasks";
import { Button } from "../button/Button";
import { CreateItemForm } from "../CreateItemForm/CreateItemForm";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export type TodolistPropsType = {
	todolist: TodolistType
	tasks: TaskType[]
	removeTask: (todolistId: string, id: string) => void
	addTask: (todolistId: string, title: string) => void
	changeFilter: (todolistId: string, value: FilterValuesType) => void
	changeStatus: (todolistId: string, id: string, newStatus: boolean) => void
	deleteTodolist: (todolistId: string) => void
	changeTaskTitle: (todolistId: string, id: string, newTitle: string) => void
	changeTodolistTitle: (id: string, newTitle: string) => void
};

export const Todolist = ({ todolist: {id, title, filter}, tasks, removeTask, addTask, changeFilter, changeStatus, deleteTodolist,changeTaskTitle, changeTodolistTitle }: TodolistPropsType) => {
	const deleteTodolistHandler = () => {
		deleteTodolist(id);
	}

	const createTaskHandler = (title: string) => {
		addTask(id, title)
	}

	const changeTodolistTitleHandler = (newTitle: string) => {
		changeTodolistTitle(id, newTitle)
	}

	return (
		<div className="todolist">
			<div className="todolist__wrapper">
				<div className="todolist__header">
					<TodolistHeader title={title} changeTodolistTitle={changeTodolistTitleHandler}/>
					{/* <Button 
						title={'x'} 
						className="btn-delete"
						onClickHandler={deleteTodolistHandler}
						ariaLabel="delete todolist"
					/> */}
					<IconButton onClick={deleteTodolistHandler} color="primary"><DeleteOutlineIcon/></IconButton>
				</div>
				<CreateItemForm className="addform__flex-wrapper" createItem={createTaskHandler}/>
				<Tasks 
					todolistId={id}
					tasks={tasks} 
					status={filter} 
					removeTask={removeTask} 
					changeStatus={changeStatus}
					changeTaskTitle={changeTaskTitle}
				/>
				<FilterButtons status={filter} changeFilter={changeFilter} todolistId={id} />
			</div>
		</div>
	);
};
