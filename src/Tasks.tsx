import React from 'react';
import { Button } from './Button';
import { TaskType } from './App';

type TasksPropsType = {
	tasks: TaskType[]
	removeTask: (id: number) => void;
}

export const Tasks = ({tasks, removeTask} : TasksPropsType) => {
	//условный рендеринг
	const tasksList: JSX.Element =
	tasks.length === 0 ? (
		<span className="todolist__msg">Your todolist is empty</span>
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
