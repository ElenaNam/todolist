import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { CreateItemForm } from "@/components/CreateItemForm/CreateItemForm";
import { createTodolistAC } from "@/features/todolists/model/todolists-reducer";
import { Todolists } from "@/features/todolists/ui/Todolists/Todolists";
import { Container, Grid2 } from "@mui/material";
import { appHeaderSx } from "./App.styles";

export const Main = () => {
	const dispatch = useAppDispatch()	

	const createTodolist = (title: string) => {
		dispatch(createTodolistAC(title))
	};

	return (
		<Container>
			<Grid2 container sx={{ justifyContent: "center", }} >
				<CreateItemForm
					styles={appHeaderSx}
					placeholder="add new todolist"
					createItem={createTodolist}
				/>
			</Grid2>
			<Grid2 container spacing={2} sx={{justifyContent: "center", alignItems: "center"}}>
				<Todolists />
			</Grid2>
		</Container>
	);
};
