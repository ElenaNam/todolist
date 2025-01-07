import React, { useState } from "react";
import { Todolist } from "./components/Todolist/Todolist";
import { v1 } from "uuid";
import { CreateItemForm } from "./components/CreateItemForm/CreateItemForm";

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
	)
	setTodolists(newTodolists);
  };

  //Delete
  const deleteTodolist = (todolistId: string) => {
	const newTodolists = todolists.filter((item) => item.id !== todolistId);
	setTodolists(newTodolists);
	delete tasks[todolistId];
	setTasks({ ...tasks });
  };

  //UI
  return (
	<div className="App">
	  <div className="container">
		<CreateItemForm className="App__header" placeholder="add new todolist" createItem={createTodolist} />
		<div className="App__main">
		  {todolists.map((list) => {
			const todolistTasks = tasks[list.id];
			let tasksForTodoList = todolistTasks;

			if (list.filter === "active") {
			  tasksForTodoList = tasks[list.id].filter((item) => !item.isDone);
			}

			if (list.filter === "completed") {
			  tasksForTodoList = tasks[list.id].filter((item) => item.isDone);
			}
			return (
			  <Todolist
				key={list.id}
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
			);
		  })}
		</div>
	  </div>
	</div>
  );
}

export default App;
