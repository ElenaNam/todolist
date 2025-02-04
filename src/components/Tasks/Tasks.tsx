import List from '@mui/material/List';
import { FilterValuesType, TaskType } from '../../app/App';
import { Task } from './Task';
import ListItem from '@mui/material/ListItem';
import { Typography } from '@mui/material';
import { todolistItemsSx } from "../../app/App.styles";

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
			<Typography sx={{padding: '9px 0;'}}>{msg}</Typography>
	) : (
		<List sx={todolistItemsSx}>
			{tasks.map((item) => {
				return (
					<ListItem key={item.id} className="todolist__item" data-id={item.id} style={{padding: '0', display:'flex'}}>
						<Task 
							todolistId={todolistId}
							id={item.id} 
							title={item.title}
							isDone={item.isDone} 
							changeTaskTitle={changeTaskTitle} 
							changeTaskStatus={changeStatus}
							removeTask={removeTask}
						/>
					</ListItem>
				)
			})}
		</List>
	);
	return tasksList;
};
