import type { Meta } from "@storybook/react";
import { FilterValuesType, TaskType } from "../../App";
import { Task } from "./Task";
import { useState } from "react";

const meta: Meta<typeof Task> = {
  title: "Task",
  component: Task
};

export default meta;

type TaskPropsType = {
	todolistId: string
	id: string
	title: string
	isDone: boolean
	removeTask: () => void
	changeTaskTitle: () => void
	changeTaskStatus: () => void
}

const dataForTask: TaskPropsType = {
	todolistId: 'todolist id',
	id: 'task id',
	title: 'React',
	isDone: false,
	removeTask: () => {},
	changeTaskTitle: () => {},
	changeTaskStatus: () => {}
}

export const TaskActive = () => {
	const [task, setTask] = useState<TaskPropsType | null>(dataForTask)

	return (
		task && (
			<li key={task.id} className="todolist__item" data-id={task.id}>
				<Task
					todolistId={task.todolistId}
					id={task.id}
					title={task.title}
					isDone={task.isDone}
					changeTaskTitle={() => alert(`${task.title}`)}
					changeTaskStatus={() => task && setTask({ ...task, isDone: !task.isDone })}
					removeTask={() => setTask(null)}
				/>
			</li>
		)
	);
}

export const TaskCompleted = () => {
	const [task, setTask] = useState<TaskPropsType | null>(dataForTask)

	return (
		task && (
			<li key={task.id} className="todolist__item" data-id={task.id}>
				<Task
					todolistId={task.todolistId}
					id={task.id}
					title={task.title}
					isDone={true}
					changeTaskTitle={() => alert(`${task.title}`)}
					changeTaskStatus={() => {}}
					removeTask={() => setTask(null)}
				/>
			</li>
		)
	);
}

