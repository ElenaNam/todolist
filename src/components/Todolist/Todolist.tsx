import React from "react";
import { FilterValuesType, TaskType, TodolistType } from "../../App";
import { TodolistHeader } from "../TodolistHeader/TodolistHeader";
import { FilterButtons } from "../FilterButtons/FilterButtons";
import { Tasks } from "../Tasks/Tasks";
import { CreateItemForm } from "../CreateItemForm/CreateItemForm";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Box from "@mui/material/Box";
import { todolistSx, todolistAddFormSx, todolistHeaderSx } from "../../App.styles";
import Grid2 from "@mui/material/Grid2";

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
		<Box sx={todolistSx}>
			<div className="todolist__wrapper">
				<Grid2 container sx={todolistHeaderSx}>
					<Grid2>
						<TodolistHeader title={title} changeTodolistTitle={changeTodolistTitleHandler}/>
					</Grid2>
					<Grid2>
						<IconButton onClick={deleteTodolistHandler} color="primary">
							<DeleteOutlineIcon/>
						</IconButton>
					</Grid2>
				</Grid2>
				<CreateItemForm styles={todolistAddFormSx} createItem={createTaskHandler}/>
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
		</Box>
	);
};
