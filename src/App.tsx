import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Todolist } from "./components/Todolist/Todolist";
import { v1 } from "uuid";
import { CreateItemForm } from "./components/CreateItemForm/CreateItemForm";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import { containerSx, appHeaderSx } from "./App.styles";
import { NavButton } from "./components/NavButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Switch } from "@mui/material";


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

function App() {
  //BLL
  const todolistId1 = v1();
  const todolistId2 = v1();
  const [tasks, setTasks] = useState<TasksState>({
	[todolistId1]: [
	  {
		id: v1(),
		title: "HTML&CSS",
		isDone: true,
	  },
	  {
		id: v1(),
		title: "JS",
		isDone: false,
	  },
	  {
		id: v1(),
		title: "React",
		isDone: false,
	  },
	  {
		id: v1(),
		title: "Styled Components",
		isDone: true,
	  },
	],
	[todolistId2]: [
	  {
		id: v1(),
		title: "Мандарины",
		isDone: true,
	  },
	  {
		id: v1(),
		title: "Шоколадка",
		isDone: false,
	  },
	  {
		id: v1(),
		title: "Подарки",
		isDone: false,
	  },
	  {
		id: v1(),
		title: "Шапка",
		isDone: true,
	  },
	],
  });

  const [todolists, setTodolists] = useState<TodolistType[]>([
	{ id: todolistId1, title: "What to learn", filter: "all" },
	{ id: todolistId2, title: "What to buy", filter: "all" },
  ]);

  //CRUD logic

  //tasks

  //C - create
  const addTask = (todolistId: string, title: string) => {
	const newTask: TaskType = {
	  id: v1(),
	  title: title,
	  isDone: false,
	};
	const newTasks = {
	  ...tasks,
	  [todolistId]: [newTask, ...tasks[todolistId]],
	};
	setTasks(newTasks);
  };

  //U - update 1
  const changeStatus = (todolistId: string, id: string, newStatus: boolean) => {
	const newTasks = {
	  ...tasks,
	  [todolistId]: tasks[todolistId].map((item) =>
		item.id === id ? { ...item, isDone: newStatus } : item
	  ),
	};
	setTasks(newTasks);
  };

  //U - update 2
  const changeTaskTitle = (todolistId: string, id: string, title: string) => {
	const newTasks = {
	  ...tasks,
	  [todolistId]: tasks[todolistId].map((item) =>
		item.id === id ? { ...item, title } : item
	  ),
	};
	setTasks(newTasks);
  };

  //D - delete
  const removeTask = (todolistId: string, id: string) => {
	const filteredTasks = {
	  ...tasks,
	  [todolistId]: tasks[todolistId].filter((task) => task.id !== id),
	};
	setTasks(filteredTasks);
  };

  //todolists

  //Create
  const createTodolist = (title: string) => {
	const todolistId = v1();
	const newTodolist: TodolistType = {
	  id: todolistId,
	  title: title,
	  filter: "all",
	};
	setTodolists([...todolists, newTodolist]);
	setTasks({ ...tasks, [todolistId]: [] });
  };

  //U - update 1
  const changeFilter = (todolistId: string, filter: FilterValuesType) => {
	const newTodolist = todolists.map((item) => {
	  return item.id === todolistId ? { ...item, filter } : item;
	});
	setTodolists(newTodolist);
  };

  //U - update 2
  const changeTodolistTitle = (todolistId: string, title: string) => {
	const newTodolists = todolists.map((todolist) =>
	  todolist.id === todolistId ? { ...todolist, title } : todolist
	);
	setTodolists(newTodolists);
  };

  //Delete
  const deleteTodolist = (todolistId: string) => {
	const newTodolists = todolists.filter((item) => item.id !== todolistId);
	setTodolists(newTodolists);
	delete tasks[todolistId];
	setTasks({ ...tasks });
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

export default App;
