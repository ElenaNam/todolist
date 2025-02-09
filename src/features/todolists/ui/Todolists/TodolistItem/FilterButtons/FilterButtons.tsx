import React from "react";
import { Button, Grid2 } from "@mui/material";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { TodolistType, FilterValuesType, changeTodolistFilterAC } from "@/features/todolists/model/todolists-reducer";


type FilterButtonsPropsType = {
	todolist: TodolistType
};
export const FilterButtons = ({ todolist }: FilterButtonsPropsType) => {
	const {id, filter} = todolist
	const dispatch = useAppDispatch()

	const changeFilter = (filter: FilterValuesType) => {
		dispatch(changeTodolistFilterAC({id, filter}))
	}

	return (
		<Grid2 container sx={{gap: '7px'}}>
			<Grid2>
				<Button
					onClick={() => changeFilter("all")}
					variant="contained"
					color={filter === 'all' ? 'primary' : 'secondary'}
				>All</Button>
			</Grid2>
			<Grid2>
				<Button
					onClick={() => changeFilter("active")}
					variant="contained"
					color={filter === 'active' ? 'primary' : 'secondary'}
				>Active</Button>
			</Grid2>
			<Grid2>
				<Button
					onClick={() => changeFilter("completed")}
					variant="contained"
					color={filter === 'completed' ? 'primary' : 'secondary'}
				>Completed</Button>
			</Grid2>
		</Grid2>
	);
};
