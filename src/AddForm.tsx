import React from "react";
import { Button } from "./Button";

type AddFormPropsType = {};
export const AddForm = ({}: AddFormPropsType) => {
  return (
	<div className="addform__flex-wrapper">
		<input placeholder="add new task" />
		<Button title="+" className="btn-primary"/>
	</div>
  );
};
