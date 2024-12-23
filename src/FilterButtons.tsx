import React from "react";
import { Button } from "./Button";
import { FilterValuesType } from "./App";

type FilterButtonsPropsType = {
	status: FilterValuesType
	changeFilter: (value: FilterValuesType) => void
};
export const FilterButtons = ({ status, changeFilter }: FilterButtonsPropsType) => {
	return (
		<div className="flex-wrapper">
			<Button
				title="All"
				onClickHandler={() => changeFilter("all")}
				className={status === 'all' ? 'btn-primary active' : 'btn-primary'}
			/>
			<Button
				title="Active"
				onClickHandler={() => changeFilter("active")}
				className={status === 'active' ? 'btn-primary active' : 'btn-primary'}
			/>
			<Button
				title="Completed"
				onClickHandler={() => changeFilter("completed")}
				className={status === 'completed' ? 'btn-primary active' : 'btn-primary'}
			/>
		</div>
	);
};
