import React from "react";
import { FilterValueType, TaskType } from "./App";
import { TodolistHeader } from "./TodolistHeader";
import { AddForm } from "./AddForm";
import { FilterButtons } from "./FilterButtons";
import { Tasks } from "./Tasks";

type TodolistPropsType = {
  title: string;
  tasks: TaskType[];
  removeTask: (id: number) => void;
  changeFilter: (value: FilterValueType) => void;
};

export const Todolist = ({ title, tasks, removeTask, changeFilter }: TodolistPropsType) => {


  return (
	<div className="todolist">
		<TodolistHeader title={title}/>
		<AddForm />
		<Tasks tasks={tasks} removeTask={removeTask} />
		<FilterButtons changeFilter={changeFilter} />
	</div>
  );
};
