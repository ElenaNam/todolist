import Box from "@mui/material/Box";
import { FilterButtons } from './FilterButtons/FilterButtons';
import { TodolistType } from "../../../model/todolists-reducer";
import { createTaskAC } from "../../../model/tasks-reducer";
import { TodolistTitle } from "./TodolistTitle/TodolistTitle";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { CreateItemForm } from "@/components/CreateItemForm/CreateItemForm";
import { Tasks } from "./Tasks/Tasks";
import { todolistAddFormSx, todolistSx } from "./TodolistItem.styles";

type Props = {
	todolist: TodolistType
}

export const TodolistItem = ({todolist}: Props) => {
	const dispatch = useAppDispatch()

	const createTask = (title: string) => {
		dispatch(createTaskAC(todolist.id, title))
	}

	return (
		<Box sx={todolistSx}>
			<div className="todolist__wrapper">
				<TodolistTitle todolist={todolist} />
				<CreateItemForm styles={todolistAddFormSx} createItem={createTask}/>
				<Tasks todolist={todolist} />
				<FilterButtons todolist={todolist} />
			</div>
		</Box>
	);
};
