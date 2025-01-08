import type { Meta } from "@storybook/react";
import { Tasks } from "./Tasks";
import { FilterValuesType, TaskType } from "../../App";

const meta: Meta<typeof Tasks> = {
  title: "Tasks",
  component: Tasks
};

export default meta;

type TasksPropsType = {
	id: string
	tasks: TaskType[]
	status: FilterValuesType
} 

const data: TasksPropsType = {
	id: '123',
	tasks: [
		{
			id: '1',
			title: "HTML&CSS",
			isDone: true,
		},
		{
			id: '2',
			title: "JS",
			isDone: false,
		},
		{
			id: '3',
			title: "React",
			isDone: false,
		},
	], 
	status: 'all'
}

export const TasksList = () => (
	<Tasks
		todolistId={data.id}
		tasks={data.tasks}
		status={data.status}
		removeTask={()=> {}}
		changeStatus={()=> {}}
		changeTaskTitle={()=> {}}
	/>
);

