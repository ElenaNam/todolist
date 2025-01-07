import React, { ChangeEvent } from 'react';
import { Button } from '../button/Button';
import { FilterValuesType, TaskType } from '../../App';
import { EditableSpan } from '../editableSpan/EditableSpan';

type TasksPropsType = {
	todolistId: string
	tasks: TaskType[]
	removeTask: (todolistId: string, id: string) => void
	changeStatus: (todolistId: string, id: string, newStatus: boolean) => void
	status: FilterValuesType
	changeTaskTitle: (todolistId: string, id: string, newTitle: string) => void
}

export const Tasks = ({todolistId, tasks, removeTask, status, changeStatus, changeTaskTitle} : TasksPropsType) => {
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

				const changeItemTitleHandler = (newTitle: string) => {
					changeTaskTitle(todolistId, item.id, newTitle)
				}

				return (
					<li key={item.id} className="todolist__item" data-id={item.id}>
						<label className="todolist__item-label">
							<input 
								type="checkbox" 
								id={`${item.id}`} 
								checked={item.isDone} 
								onChange={changeTaskStatusHandler}
								aria-label={item.isDone ? 'Выполнено' : 'Активно'} 
							/>
							{" "}
							<EditableSpan 
								title={item.title} 
								className={item.isDone ? "todolist__label task-done" : "todolist__label"} 
								changeTitle={changeItemTitleHandler}
							/>
						</label>
						<Button title='X' onClickHandler={() => removeTask(todolistId, item.id)} className="btn-delete" ariaLabel="delete task"/>
				</li>
				)

			})}
		</ul>
	);
	return tasksList;
};
