import Button from "@mui/material/Button";
import React, { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Grid2, SxProps, TextField } from "@mui/material";

type CreateItemFormPropsType = {
	styles?: SxProps
	placeholder?: string
	createItem: (itemTitle: string) => void
}

export const CreateItemForm = ({styles, placeholder, createItem} : CreateItemFormPropsType) => {
	const [taskTitle, setTaskTitle] = useState('')
	const [error, setError] = useState<string | null>(null)

	const changeItemTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTaskTitle(e.currentTarget.value);
		setError(null)
	}

	const createTaskOnEnterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if(e.key === 'Enter') {
			createItem(e.currentTarget.value)
			setTaskTitle('');
		}
	}

	const createItemHandler = () => {
		const trimmedTitle = taskTitle.trim();
		if(trimmedTitle) {
			createItem(trimmedTitle)
			setTaskTitle('');
		} else {
			setError('Task title is required')
		}
	}

	return (
			<Grid2 container sx={styles}>
				<Grid2>
					<TextField
						placeholder={placeholder ? placeholder : "add new task"}
						value={taskTitle}
						onChange={changeItemTitleHandler}
						onKeyDown={createTaskOnEnterHandler}
						variant="outlined"
						size="small"
						error={!!error}
						color="secondary"
					/>
				</Grid2>
				<Grid2>
					<Button variant='outlined' endIcon={<AddCircleOutlineIcon />} onClick={createItemHandler} disabled={!taskTitle.length} disableElevation>add</Button>
				</Grid2>
		</Grid2>
	);
};
