import React from 'react';
import { EditableSpan } from '../editableSpan/EditableSpan';

type TodolistHeaderPropsType = {
	title: string;
	changeTodolistTitle: (newTitle: string) => void
};
export const TodolistHeader = ({title, changeTodolistTitle}: TodolistHeaderPropsType) => {
	return <h3>
		<EditableSpan title={title} changeTitle={changeTodolistTitle} />
	</h3>;
};
