import React, { ChangeEvent } from "react";
import { TaskType } from "../../app/App";
import { EditableSpan } from "../editableSpan/EditableSpan";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Box from "@mui/material/Box";
import { getListItemSx } from "../../app/App.styles";
import Checkbox from "@mui/material/Checkbox";


type TaskPropsType = TaskType & {
	todolistId: string
	removeTask: (todolistId: string, id: string) => void
	changeTaskTitle: (todolistId: string, id: string, newTitle: string) => void
	changeTaskStatus: (todolistId: string, id: string, newStatus: boolean) => void
};

export const Task = ({ todolistId, id, title, isDone, removeTask, changeTaskTitle, changeTaskStatus }: TaskPropsType) => {
	const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) =>
		changeTaskStatus(todolistId, id, e.currentTarget.checked);

	const changeItemTitleHandler = (newTitle: string) => {
		changeTaskTitle(todolistId, id, newTitle);
	};

	return (
		<>
			<Box sx={{display:'flex', alignItems: 'center'}}>
				<Checkbox checked={isDone} onChange={changeTaskStatusHandler} />
				
				<Box sx={getListItemSx(isDone)} style={{display: 'flex'}}>
					<EditableSpan
						title={title}
						changeTitle={changeItemTitleHandler}
				/>
				</Box>
			</Box>

			<IconButton 
				onClick={() => removeTask(todolistId, id)} 
				size="small" 
				color="primary" 
				style={{padding: 0}}
			>
				<DeleteOutlineIcon/>
			</IconButton>
		</>
	);
};
