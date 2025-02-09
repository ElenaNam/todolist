import { useAppSelector } from "@/common/hooks/useAppSelector";
import { Grid2, Paper } from "@mui/material";
import { selectTodolists } from "../../model/todolists-selectors";
import { TodolistItem } from "./TodolistItem/TodolistItem";


export const Todolists = () => {
	//BLL	
	const todolists = useAppSelector(selectTodolists);
	

	return (
		<>
			{todolists.map((todolist) => (
				<Grid2 key={todolist.id}>
					<Paper elevation={3}>
						<TodolistItem todolist={todolist} />
					</Paper>
				</Grid2>
			))}
		</>
	)
};
