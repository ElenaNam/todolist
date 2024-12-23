import React, { useState } from "react";
import { Button } from "./Button";

type AddFormPropsType = {
	addTask: (title: string) => void
};


export const AddForm = ({addTask}: AddFormPropsType) => {
	const [inputValue, setInputValue] = useState<string>('')
	//const [error, setError] = useState<string | null>(null)

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		//error && setError(null)
		setInputValue(e.currentTarget.value);
	}

	const handleKeyDownPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if(inputValue && isAddTaskPossible) {
			if(e.key === 'Enter') {
				addTask(e.currentTarget.value)
				setInputValue('');
			}
		}
	}

	const handleClick = () => {
		//error && setError(null)
		const trimmedTitle = inputValue.trim();
		if(trimmedTitle) {
			addTask(trimmedTitle);
		} else {
			//setError('Task title is required')
		}
		setInputValue('');
	}

	const isAddTaskPossible = inputValue.length <= 15

	return (
		<div className="addform">
			<div className="addform__flex-wrapper">
				<input 
					placeholder="add new task" 
					value={inputValue} 
					onChange={handleChange} 
					onKeyDown={handleKeyDownPress}
					/>
				<Button 
					title="+" 
					className="btn-primary" 
					onClickHandler={handleClick} 
					disabled={!inputValue.length || !isAddTaskPossible} 
					ariaLabel="add task"
				/>
			</div>
			{!inputValue.length && <div className="addform__msg">Enter task title</div>}
			{!isAddTaskPossible && <div className="addform__msg">Task title is too long</div>}
		</div>
	);
};
