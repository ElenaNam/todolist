import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Todolist } from "../components/Todolist/Todolist";
import { CreateItemForm } from "../components/CreateItemForm/CreateItemForm";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import { containerSx, appHeaderSx } from "./App.styles";
import { NavButton } from "../components/NavButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Switch } from "@mui/material";
import { changeTodolistFilterAC, changeTodolistTitleAC, createTodolistAC, deleteTodolistAC } from "../model/todolists-reducer";
import { changeTaskStatusAC, changeTaskTitleAC, createTaskAC, deleteTaskAC } from "../model/tasks-reducer";

import { useAppSelector } from "../common/hooks/useAppSelector";
import { useAppDispatch } from "../common/hooks/useAppDispatch";
import { selectTodolists } from "../model/todolists-selectors";
import { selectTasks } from "../model/tasks-selectors";

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type TasksState = {
  [key: string]: TaskType[];
};

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistType = {
  id: string;
  title: string;
  filter: FilterValuesType;
};

export const App = () => {
  //BLL
  //const [tasks, dispatchToTasks] = useSelector(tasksReducer, {})
  //const tasks = useAppSelector((state) => state.tasks)
  const tasks = useAppSelector(selectTasks)
  const todolists = useAppSelector(selectTodolists);
  //const [todolists, dispatchToTodolists] = useSelector(todolistsReducer, []);

  const dispatch = useAppDispatch()

  //CRUD logic

  //tasks

  //C - create
  const addTask = (todolistId: string, title: string) => {
	dispatch(createTaskAC({todolistId, title}))
  };

  //U - update 1
  const changeStatus = (todolistId: string, id: string, newStatus: boolean) => {
	dispatch(changeTaskStatusAC({todolistId, id, status: newStatus}))
  };

  //U - update 2
  const changeTaskTitle = (todolistId: string, id: string, title: string) => {
	dispatch(changeTaskTitleAC({todolistId, id, title}))
  };

  //D - delete
  const removeTask = (todolistId: string, id: string) => {
	dispatch(deleteTaskAC({todolistId, id}))
  };

  //todolists

  //Create
  const createTodolist = (title: string) => {
	dispatch(createTodolistAC(title))

  };

  //U - update 1
  const changeFilter = (todolistId: string, filter: FilterValuesType) => {
	dispatch(changeTodolistFilterAC({id: todolistId, filter}))
  };

  //U - update 2
  const changeTodolistTitle = (todolistId: string, title: string) => {
	dispatch(changeTodolistTitleAC({id: todolistId, title}))
  };

  //Delete
  const deleteTodolist = (todolistId: string) => {
	dispatch(deleteTodolistAC({id: todolistId}))
  };

  //MUI
  const [isLightMode, setIsLightMode] = useState(true)
  let theme = createTheme({
	palette: {
			primary: {main: '#ff9800', light: '#ffac33', dark: '#b26a00'}, 
			secondary: {main: '#ffc400'}, 
			mode: isLightMode ? 'light' : 'dark', 
		}, 
	})

  //UI
  return (
	<div className="App">
	  <ThemeProvider theme={theme}>
		<CssBaseline />
		<AppBar position="static">
		  <Toolbar>
			<Container sx={containerSx}>
			  <IconButton color="inherit">
				<MenuIcon />
			  </IconButton>
			  <div>
				<Switch onChange={() => setIsLightMode(!isLightMode)} />
				<NavButton>Sign in</NavButton>
				<NavButton>Sign up</NavButton>
				<NavButton background={"dodgerblue"}>Faq</NavButton>
			  </div>
			</Container>
		  </Toolbar>
		</AppBar>
		<Container>
		  <Grid2
			container
			sx={{
			  justifyContent: "center",
			}}
		  >
			<CreateItemForm
			  styles={appHeaderSx}
			  placeholder="add new todolist"
			  createItem={createTodolist}
			/>
		  </Grid2>
		  <Grid2
			container
			spacing={2}
			sx={{
			  justifyContent: "center",
			  alignItems: "center",
			}}
		  >
			  {todolists.map((list) => {
				const todolistTasks = tasks[list.id];
				let tasksForTodoList = todolistTasks;

				if (list.filter === "active") {
				  tasksForTodoList = tasks[list.id].filter(
					(item) => !item.isDone
				  );
				}

				if (list.filter === "completed") {
				  tasksForTodoList = tasks[list.id].filter(
					(item) => item.isDone
				  );
				}
				return (
				  <Grid2 key={list.id}>
					<Paper elevation={3}>
					  <Todolist
						todolist={list}
						tasks={tasksForTodoList}
						changeStatus={changeStatus}
						removeTask={removeTask}
						addTask={addTask}
						changeFilter={changeFilter}
						deleteTodolist={deleteTodolist}
						changeTaskTitle={changeTaskTitle}
						changeTodolistTitle={changeTodolistTitle}
					  />
					</Paper>
				  </Grid2>
				);
			  })}
		  </Grid2>
		</Container>
	  </ThemeProvider>
	</div>
  );
}
