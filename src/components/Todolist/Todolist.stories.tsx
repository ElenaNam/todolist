import { Meta } from "@storybook/react/*";
import { Todolist, TodolistPropsType } from "./Todolist";
import { FilterValuesType } from "../../app/App";

const meta: Meta<typeof Todolist> = {
	title: "Todolist",
	component: Todolist
};

export default meta;

const data: TodolistPropsType = {
	todolist: {
		id: '123',
		title: 'What to learn',
		filter: 'all',
	},
	tasks: [
		{
			id: '4564',
			title: 'HTML',
			isDone: true,
		}, 
		{
			id: '4566',
			title: 'CSS',
			isDone: false,
		}, 
		{
			id: '4569',
			title: 'JS',
			isDone: false,
		}, 
	],
	removeTask: () => {},
	addTask: () => {},
	changeFilter: () => {},
	changeStatus: () => {},
	deleteTodolist: () => {},
	changeTaskTitle: () => {},
	changeTodolistTitle: () => {},
}

const dataFilterActive = {...data, todolist: {...data.todolist, filter: "active" as FilterValuesType}}
const dataFilterCompleted = {...data, todolist: {...data.todolist, filter: "completed" as FilterValuesType}}

const dataTasksStatusActive = {...data, tasks: data.tasks.filter(i => !i.isDone)}
const dataTasksStatusCompleted = {...data, tasks: data.tasks.filter(i => i.isDone)}


export const TodolistWithTasks = () => {
	return (
		<Todolist
			key={data.todolist.id}
			todolist={data.todolist}
			tasks={data.tasks}
			changeStatus={data.changeStatus}
			removeTask={data.removeTask}
			addTask={data.addTask}
			changeFilter={data.changeFilter}
			deleteTodolist={data.deleteTodolist}
			changeTaskTitle={data.changeTaskTitle}
			changeTodolistTitle={data.changeTodolistTitle}
		/>
	);
}

export const TodolistWithTasksAndActiveFilter = () => {
	return (
		<Todolist
			key={data.todolist.id}
			todolist={dataFilterActive.todolist}
			tasks={dataTasksStatusActive.tasks}
			changeStatus={data.changeStatus}
			removeTask={data.removeTask}
			addTask={data.addTask}
			changeFilter={data.changeFilter}
			deleteTodolist={data.deleteTodolist}
			changeTaskTitle={data.changeTaskTitle}
			changeTodolistTitle={data.changeTodolistTitle}
		/>
	);
}

export const TodolistWithTasksAndCompletedFilter = () => {
	return (
		<Todolist
			key={data.todolist.id}
			todolist={dataFilterCompleted.todolist}
			tasks={dataTasksStatusCompleted.tasks}
			changeStatus={data.changeStatus}
			removeTask={data.removeTask}
			addTask={data.addTask}
			changeFilter={data.changeFilter}
			deleteTodolist={data.deleteTodolist}
			changeTaskTitle={data.changeTaskTitle}
			changeTodolistTitle={data.changeTodolistTitle}
		/>
	);
}

export const TodolistEmpty = () => {
	return (
		<Todolist
			key={data.todolist.id}
			todolist={data.todolist}
			tasks={[]}
			changeStatus={data.changeStatus}
			removeTask={data.removeTask}
			addTask={data.addTask}
			changeFilter={data.changeFilter}
			deleteTodolist={data.deleteTodolist}
			changeTaskTitle={data.changeTaskTitle}
			changeTodolistTitle={data.changeTodolistTitle}
		/>
	);
}
export const TodolistEmptyWithActiveFilter = () => {
	return (
		<Todolist
			key={data.todolist.id}
			todolist={dataFilterActive.todolist}
			tasks={[]}
			changeStatus={data.changeStatus}
			removeTask={data.removeTask}
			addTask={data.addTask}
			changeFilter={data.changeFilter}
			deleteTodolist={data.deleteTodolist}
			changeTaskTitle={data.changeTaskTitle}
			changeTodolistTitle={data.changeTodolistTitle}
		/>
	);
}
export const TodolistEmptyWithCompletedFilter = () => {
	return (
		<Todolist
			key={data.todolist.id}
			todolist={dataFilterCompleted.todolist}
			tasks={[]}
			changeStatus={data.changeStatus}
			removeTask={data.removeTask}
			addTask={data.addTask}
			changeFilter={data.changeFilter}
			deleteTodolist={data.deleteTodolist}
			changeTaskTitle={data.changeTaskTitle}
			changeTodolistTitle={data.changeTodolistTitle}
		/>
	);
}