import React from "react";
import { Button } from "./Button";

type AddFormPropsType = {
	addTask: () => void
};
export const AddForm = ({addTask}: AddFormPropsType) => {
  return (
	<div className="addform__flex-wrapper">
		<input placeholder="add new task" />
		<Button title="+" className="btn-primary" onClickHandler={addTask}/>
	</div>
  );
};
