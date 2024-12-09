import React from "react";
import { Button } from "./Button";
import { FilterValuesType } from "./App";

type FilterButtonsPropsType = {
	changeFilter: (value: FilterValuesType) => void;
};
export const FilterButtons = ({changeFilter}: FilterButtonsPropsType) => {
  return (
	<div className="flex-wrapper">
		<Button title="All" onClickHandler={() => changeFilter('all')} className="btn-primary" />
		<Button title="Active" onClickHandler={() => changeFilter('active')} className="btn-primary" />
		<Button title="Completed" onClickHandler={() => changeFilter('completed')} className="btn-primary" />
	</div>
  );
};
