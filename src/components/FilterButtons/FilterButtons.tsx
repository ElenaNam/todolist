import React from "react";
import { FilterValuesType } from "../../App";
import { Button } from "@mui/material";

type FilterButtonsPropsType = {
	todolistId: string
	status: FilterValuesType
	changeFilter: (todolistId: string, value: FilterValuesType) => void
};
export const FilterButtons = ({ todolistId, status, changeFilter }: FilterButtonsPropsType) => {
	return (
		<div className="flex-wrapper">
			<Button
				onClick={() => changeFilter(todolistId, "all")}
				variant="contained"
				color={status === 'all' ? 'secondary' : 'primary'}
				//className={status === 'all' ? 'btn-primary active' : 'btn-primary'}
			>All</Button>
			<Button
				onClick={() => changeFilter(todolistId, "active")}
				variant="contained"
				color={status === 'active' ? 'secondary' : 'primary'}
				//className={status === 'active' ? 'btn-primary active' : 'btn-primary'}
			>Active</Button>
			<Button
				onClick={() => changeFilter(todolistId, "completed")}
				variant="contained"
				color={status === 'completed' ? 'secondary' : 'primary'}
				//className={status === 'completed' ? 'btn-primary active' : 'btn-primary'}
			>Completed</Button>
		</div>
	);
};
