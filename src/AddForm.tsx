import React from "react";
import { Button } from "./Button";
import { TaskType } from "./App";
import { v1 } from "uuid";

type AddFormPropsType = {
	addTask: (task: TaskType) => void
};
export const AddForm = ({addTask}: AddFormPropsType) => {
	//const [newTask, setNewTask] = React.useState<TaskType | false>(false)
	const [newTask, setNewTask] = React.useState<TaskType>({id: v1(), title: "New Task", isDone: false})

	return (
		<div className="addform__flex-wrapper">
			<input placeholder="add new task" />
			<Button title="+" className="btn-primary" onClickHandler={() => addTask(newTask)}/>
		</div>
	);
};
