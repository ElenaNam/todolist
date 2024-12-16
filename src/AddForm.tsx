import React from "react";
import { Button } from "./Button";

type AddFormPropsType = {
	addTask: (title: string) => void
};
export const AddForm = ({addTask}: AddFormPropsType) => {

	const [inputValue, setInputValue] = React.useState<string>('')

	const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
		let value = e.currentTarget.value;
		setInputValue(value);
	}

	const handleClick = () => {
		if(inputValue) {
			addTask(inputValue);
			setInputValue('');
		} 
	}

	return (
		<div className="addform__flex-wrapper">
			<input placeholder="add new task" value={inputValue} onInput={handleInput} />
			<Button title="+" className="btn-primary" onClickHandler={handleClick} disabled={!inputValue} />
		</div>
	);
};
