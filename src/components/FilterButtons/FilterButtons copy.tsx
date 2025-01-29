import React from "react";
import { Button } from "../button/Button";
import { FilterValuesType } from "../../app/App";
import Box from "@mui/material/Box";
import { containerSx } from "../../app/App.styles";

type FilterButtonsPropsType = {
	todolistId: string
	status: FilterValuesType
	changeFilter: (todolistId: string, value: FilterValuesType) => void
};
export const FilterButtons = ({ todolistId, status, changeFilter }: FilterButtonsPropsType) => {
	return (
		<Box sx={containerSx}>
			<Button
				title="All"
				onClickHandler={() => changeFilter(todolistId, "all")}
				className={status === 'all' ? 'btn-primary active' : 'btn-primary'}
			/>
			<Button
				title="Active"
				onClickHandler={() => changeFilter(todolistId, "active")}
				className={status === 'active' ? 'btn-primary active' : 'btn-primary'}
			/>
			<Button
				title="Completed"
				onClickHandler={() => changeFilter(todolistId, "completed")}
				className={status === 'completed' ? 'btn-primary active' : 'btn-primary'}
			/>
		</Box>
	);
};
