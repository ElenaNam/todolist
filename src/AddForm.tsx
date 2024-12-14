import React from "react";
import { Button } from "./Button";
import { TaskType } from "./App";
import { v1 } from "uuid";

type AddFormPropsType = {
	addTask: (task: TaskType) => void
};
export const AddForm = ({addTask}: AddFormPropsType) => {
	const [newTask, setNewTask] = React.useState<TaskType | false>(false)
	const [inputValue, setInputValue] = React.useState<string>('')

	const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
		let value = e.currentTarget.value;
		setInputValue(value);

		setNewTask({
			id: v1(),
			title: value,
			isDone: false
		})
	}

	const handleClick = () => {
		if(newTask) {
			addTask(newTask);
			setInputValue('');
			setNewTask(false);
		} 
	}

	return (
		<div className="addform__flex-wrapper">
			<input placeholder="add new task" value={inputValue} onInput={handleInput} />
			<Button title="+" className="btn-primary" onClickHandler={handleClick} disabled={!newTask} />
		</div>
	);
};
