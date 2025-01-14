import { TextField } from "@mui/material";
import React, { useState } from "react";

type EditableLabelPropsType = {
	className?: string;
	title: string;
	changeTitle: (newTitle: string) => void
};
export const EditableSpan = ({ className, title, changeTitle }: EditableLabelPropsType) => {
	const [isEditMode, setIsEditMode] = useState(false);
	const [itemTitle, setItemTitle] = useState(title);

	const onEditMode = () => {
	setIsEditMode(true);
	};

	const offEditMode = () => {
	setIsEditMode(false);
	changeTitle(itemTitle);
	};

	const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
	setItemTitle(e.currentTarget.value);
	};

	return isEditMode ? (
	<TextField 
		value={itemTitle} 
		onChange={changeInputHandler} 
		autoFocus
		onBlur={offEditMode} 

		id="standard-basic" 
		label='rename task' 
		variant="standard"
	/>
	) : (
	<span className={className} onDoubleClick={onEditMode}>
		{title}
	</span>
	);
};
