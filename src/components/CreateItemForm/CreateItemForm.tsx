import Button from "@mui/material/Button";
import React, { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { TextField } from "@mui/material";

type CreateItemFormPropsType = {
	className?: string
	placeholder?: string
	createItem: (itemTitle: string) => void
}

export const CreateItemForm = ({className, placeholder, createItem} : CreateItemFormPropsType) => {
	const [taskTitle, setTaskTitle] = useState('')
	const [error, setError] = useState<string | null>(null)

	const changeItemTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
			<TextField
				//className={error ? 'error' : ''}
				placeholder={placeholder ? placeholder : "add new task"}
				value={taskTitle}
				onChange={changeItemTitleHandler}
				onKeyDown={handleKeyDownPress}
				variant="outlined"
				size="small"
				error={!!error}
				color="secondary"
			/>
			<Button endIcon={<AddCircleOutlineIcon />} onClick={handleClick} disabled={!taskTitle.length} disableElevation>add</Button>
		</div>
	);
};
