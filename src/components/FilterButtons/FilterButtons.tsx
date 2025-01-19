import React from "react";
import { FilterValuesType } from "../../App";
import { Button, Grid2 } from "@mui/material";

type FilterButtonsPropsType = {
	todolistId: string
	status: FilterValuesType
	changeFilter: (todolistId: string, value: FilterValuesType) => void
};
export const FilterButtons = ({ todolistId, status, changeFilter }: FilterButtonsPropsType) => {
	return (
		<Grid2 container sx={{gap: '7px'}}>
			<Grid2>
				<Button
					onClick={() => changeFilter(todolistId, "all")}
					variant="contained"
					color={status === 'all' ? 'primary' : 'secondary'}
				>All</Button>
			</Grid2>
			<Grid2>
				<Button
					onClick={() => changeFilter(todolistId, "active")}
					variant="contained"
					color={status === 'active' ? 'primary' : 'secondary'}
				>Active</Button>
			</Grid2>
			<Grid2>
				<Button
					onClick={() => changeFilter(todolistId, "completed")}
					variant="contained"
					color={status === 'completed' ? 'primary' : 'secondary'}
				>Completed</Button>
			</Grid2>
		</Grid2>
	);
};
