import React, { useState } from "react";
import { Button } from "../button/Button";
import Grid2 from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { addFormMsgSx } from "../../App.styles";

type AddFormPropsType = {
	todolistId: string
	addTask: (todolistId: string, title: string) => void
};


export const AddForm = ({todolistId, addTask}: AddFormPropsType) => {
	const [inputValue, setInputValue] = useState<string>('')
	//const [error, setError] = useState<string | null>(null)

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		//error && setError(null)
		setInputValue(e.currentTarget.value);
	}

	const handleKeyDownPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if(inputValue && isAddTaskPossible) {
			if(e.key === 'Enter') {
				addTask(todolistId, e.currentTarget.value)
				setInputValue('');
			}
		}
	}

	const handleClick = () => {
		//error && setError(null)
		const trimmedTitle = inputValue.trim();
		if(trimmedTitle) {
			addTask(todolistId, trimmedTitle);
		} else {
			//setError('Task title is required')
		}
		setInputValue('');
	}

	const isAddTaskPossible = inputValue.length <= 15

	return (
		<Box>
			<Grid2 container>
				<Grid2>
					<input 
						placeholder="add new task" 
						value={inputValue} 
						onChange={handleChange} 
						onKeyDown={handleKeyDownPress}
					/>
				</Grid2>
				<Grid2>
					<Button 
						title="+" 
						className="btn-primary" 
						onClickHandler={handleClick} 
						disabled={!inputValue.length || !isAddTaskPossible} 
						ariaLabel="add task"
					/>
				</Grid2>
			</Grid2>
			{!inputValue.length && <Typography sx={addFormMsgSx}>Enter task title</Typography>}
			{!isAddTaskPossible && <Typography sx={addFormMsgSx}>Task title is too long</Typography>}
		</Box>
	);
};
