import React from "react";
import { FilterValueType, TaskType } from "./App";
import { TodolistHeader } from "./TodolistHeader";
import { AddForm } from "./AddForm";
import { FilterButtons } from "./FilterButtons";
import { Button } from "./Button";

type TodolistPropsType = {
  title: string;
  tasks: TaskType[];
  removeTask: (id: number) => void;
  changeFilter: (value: FilterValueType) => void;
};

export const Todolist = ({ title, tasks, removeTask, changeFilter }: TodolistPropsType) => {
	//условный рендеринг
	const tasksList =
	tasks.length === 0 ? (
		<span>Your todolist is empty</span>
	) : (
		<ul className="todolist__items">
			{tasks.map((item) => (
			<li key={item.id} className="todolist__item">
				<div className="todolist__item-label">
					<input type="checkbox" id={`${item.id}`} checked={item.isDone} aria-label={item.isDone ? 'Выполнено' : 'Активно'} />{" "}
					<label htmlFor={`${item.id}`} className="todolist__label">{item.title}</label>
				</div>
				<Button title='X' onClick={() => removeTask(item.id)} className="btn-delete" />
			</li>
			))}
		</ul>
	);

  return (
	<div className="todolist">
		<TodolistHeader title={title}/>
		<AddForm />
		{tasksList}
		<FilterButtons changeFilter={changeFilter} />
	</div>
  );
};
