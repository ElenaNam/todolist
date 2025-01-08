import React, { ChangeEvent } from "react";
import { Button } from "../button/Button";
import { TaskType } from "../../App";
import { EditableSpan } from "../editableSpan/EditableSpan";

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
			<label className="todolist__item-label">
				<input
					type="checkbox"
					id={id}
					checked={isDone}
					onChange={changeTaskStatusHandler}
					aria-label={isDone ? "Выполнено" : "Активно"}
				/>
				{" "}
				<EditableSpan
					title={title}
					className={isDone ? "todolist__label task-done" : "todolist__label"}
					changeTitle={changeItemTitleHandler}
				/>
			</label>
			<Button
				title="X"
				onClickHandler={() => removeTask(todolistId, id)}
				className="btn-delete"
				ariaLabel="delete task"
			/>
		</>
	);
};
