import React, { ChangeEvent } from 'react';
import { Button } from './Button';
import { FilterValuesType, TaskType } from './App';

type TasksPropsType = {
	todolistId: string
	tasks: TaskType[]
	removeTask: (todolistId: string, id: string) => void
	changeStatus: (todolistId: string, id: string, newStatus: boolean) => void
	status: FilterValuesType
}

export const Tasks = ({todolistId, tasks, removeTask, status, changeStatus} : TasksPropsType) => {
	let msg = "Your todolist is empty";
	if (tasks.length === 0 && status === "active") msg = "No active tasks"
	if (tasks.length === 0 && status === "completed") msg = "No completed tasks"

	const tasksList: JSX.Element =
	tasks.length === 0 ? (
		<span className="todolist__msg">{msg}</span>
	) : (
		<ul className="todolist__items">
			{tasks.map((item) => {
				const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => changeStatus(todolistId, item.id, e.currentTarget.checked)
				return (
					<li key={item.id} className="todolist__item" data-id={item.id}>
						<div className="todolist__item-label">
							<input 
								type="checkbox" 
								id={`${item.id}`} 
								checked={item.isDone} 
								onChange={changeTaskStatusHandler}
								aria-label={item.isDone ? 'Выполнено' : 'Активно'} 
							/>
							{" "}
							<label 
								htmlFor={`${item.id}`} 
								className={item.isDone ? "todolist__label task-done" : "todolist__label"}
							>{item.title}</label>
						</div>
						<Button title='X' onClickHandler={() => removeTask(todolistId, item.id)} className="btn-delete" />
				</li>
				)

			})}
		</ul>
	);
	return tasksList;
};
