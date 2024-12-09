import React from "react";
import { Button } from "./Button";
import { FilterValueType } from "./App";

type FilterButtonsPropsType = {
	changeFilter: (value: FilterValueType) => void;
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
