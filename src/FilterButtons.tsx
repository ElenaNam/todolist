import React from "react";
import { Button } from "./Button";

type FilterButtonsPropsType = {
	changeFilter: () => void;
};
export const FilterButtons = ({changeFilter}: FilterButtonsPropsType) => {
  return (
	<div>
		<Button title="All" onClick={() => changeFilter()} />
		<Button title="Active" onClick={() => changeFilter()} />
		<Button title="Completed" onClick={() => changeFilter()} />
	</div>
  );
};
