import React from 'react';
import { Button } from './Button';
import { FilterValuesType, TaskType } from './App';

type TasksPropsType = {
	tasks: TaskType[]
	removeTask: (id: number) => void;
	status: FilterValuesType
}

export const Tasks = ({tasks, removeTask, status} : TasksPropsType) => {
	let msg = "Your todolist is empty";
	if (tasks.length === 0 && status === "active") msg = "No active tasks"
	if (tasks.length === 0 && status === "completed") msg = "No completed tasks"

	const tasksList: JSX.Element =
	tasks.length === 0 ? (
		<span className="todolist__msg">{msg}</span>
	) : (
		<ul className="todolist__items">
			{tasks.map((item) => (
			<li key={item.id} className="todolist__item">
				<div className="todolist__item-label">
					<input type="checkbox" id={`${item.id}`} checked={item.isDone} aria-label={item.isDone ? 'Выполнено' : 'Активно'} />{" "}
					<label htmlFor={`${item.id}`} className="todolist__label">{item.title}</label>
				</div>
				<Button title='X' onClickHandler={() => removeTask(item.id)} className="btn-delete" />
			</li>
			))}
		</ul>
	);
	return tasksList;
};
