import React from 'react';
import { EditableSpan } from '../editableSpan/EditableSpan';
import { Typography } from '@mui/material';

type TodolistHeaderPropsType = {
	title: string;
	changeTodolistTitle: (newTitle: string) => void
};
export const TodolistHeader = ({title, changeTodolistTitle}: TodolistHeaderPropsType) => {
	return <Typography align="center" variant='h6'>
		<EditableSpan title={title} changeTitle={changeTodolistTitle} />
	</Typography>;
};
