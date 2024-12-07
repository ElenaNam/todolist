import React from "react";
import { Button } from "./Button";
import { FilterValueType } from "./App";

type FilterButtonsPropsType = {
	changeFilter: (value: FilterValueType) => void;
};
export const FilterButtons = ({changeFilter}: FilterButtonsPropsType) => {
  return (
	<div>
		<Button title="All" onClick={() => changeFilter('all')} />
		<Button title="Active" onClick={() => changeFilter('active')} />
		<Button title="Completed" onClick={() => changeFilter('completed')} />
	</div>
  );
};
