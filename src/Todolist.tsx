import React from "react";
import { TaskType } from "./App";
import { TodolistHeader } from "./TodolistHeader";
import { AddForm } from "./AddForm";
import { FilterButtons } from "./FilterButtons";

type TodolistPropsType = {
  title: string;
  tasks: TaskType[];
  removeTask: (id: number) => void;
};

export const Todolist = ({ title, tasks, removeTask }: TodolistPropsType) => {
	//условный рендеринг
	const tasksList =
	tasks.length === 0 ? (
		<span>Your todolist is empty</span>
	) : (
		<ul>
			{tasks.map((item) => (
			<li key={item.id}>
				<input type="checkbox" checked={item.isDone} />{" "}
				<span>{item.title}</span>
				<button className="btn-delete" onClick={() => removeTask(item.id)}>X</button>
			</li>
			))}
		</ul>
	);

  return (
	<div className="todolist">
		<TodolistHeader title={title}/>
		<AddForm />
		{tasksList}
		<FilterButtons />
	</div>
  );
};
