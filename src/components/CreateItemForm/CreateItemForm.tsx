import React, { useState } from "react";
import { Button } from "../button/Button";

type CreateItemFormPropsType = {
	className?: string
	placeholder?: string
	createItem: (itemTitle: string) => void
}

export const CreateItemForm = ({className, placeholder, createItem} : CreateItemFormPropsType) => {
	const [taskTitle, setTaskTitle] = useState('')
	const [error, setError] = useState<string | null>(null)

	const changeItemTitleHandler = (e: React.FormEvent<HTMLInputElement>) => {
		//error && setError(null)
		setTaskTitle(e.currentTarget.value);
		setError(null)
	}

	const handleKeyDownPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if(e.key === 'Enter') {
			createItem(e.currentTarget.value)
			setTaskTitle('');
		}
	}

	const handleClick = () => {
		//error && setError(null)
		const trimmedTitle = taskTitle.trim();
		if(trimmedTitle) {
			createItem(trimmedTitle)
		} else {
			setError('Task title is required')
		}
		setTaskTitle('');
	}

	return (
			<div className={className}>
			<input
				className={error ? 'error' : ''}
				placeholder={placeholder ? placeholder : "add new task"}
				value={taskTitle}
				onChange={changeItemTitleHandler}
				onKeyDown={handleKeyDownPress}
			/>
			<Button
				title="+"
				className="btn-primary"
				onClickHandler={handleClick}
				disabled={!taskTitle.length}
				ariaLabel="add task"
			/>
		</div>
	);
};
