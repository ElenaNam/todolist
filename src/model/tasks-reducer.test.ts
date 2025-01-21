import { v1 } from "uuid"
import { TasksState } from "../App"
import { changeTaskStatusAC, changeTaskTitleAC, createTaskAC, createTodolistAC, deleteTaskAC, deleteTodolistAC, tasksReducer } from "./tasks-reducer"

let startState: TasksState = {}

beforeEach(()=>{
	startState = {
		todolistId1: [
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
			id: '123',
			title: "React",
			isDone: false,
		  },
		  {
			id: v1(),
			title: "Styled Components",
			isDone: true,
		  },
		],
		todolistId2: [
		  {
			id: v1(),
			title: "Мандарины",
			isDone: true,
		  },
		  {
			id: '587',
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
	  } 
})

test('array should be created for new todolist', () => {
	const endState = tasksReducer(startState, createTodolistAC('New todolist'))
   
	const keys = Object.keys(endState)
	const newKey = keys.find(k => k !== 'todolistId1' && k !== 'todolistId2')
	if (!newKey) {
	  throw Error('New key should be added')
	}
	expect(keys.length).toBe(3)
	expect(endState[newKey]).toEqual([])
})

test('property with todolistId should be deleted', () => {
	const endState = tasksReducer(startState, deleteTodolistAC('todolistId2'))
   
	const keys = Object.keys(endState)

	expect(keys.length).toBe(1)
	expect(endState['todolistId2']).not.toBeDefined()
})

test('correct task should be deleted', () => {
	const endState = tasksReducer(startState, deleteTaskAC({todolistId: "todolistId1", id: '123'}))

	expect(endState["todolistId1"].length).toBe(3)
	expect(endState["todolistId2"].length).toBe(4)
})

test('correct task should be created', () => {
	const newTaskTitle = 'New task'
	const endState = tasksReducer(startState, createTaskAC({todolistId: "todolistId2", title: newTaskTitle}))

	expect(endState["todolistId2"][0].title).toBe('New task')
	expect(endState["todolistId2"].length).toBe(5)
})

test('correct task should change its title', () => {
	const title = 'Task #99'
	const endState = tasksReducer(startState, changeTaskTitleAC({todolistId:"todolistId2", id: '587', title}))

	expect(endState["todolistId2"][1].title).toBe('Task #99')
	expect(title).toBeDefined()
})

test('correct task should change its status', () => {
	const isDone = true
	const endState = tasksReducer(startState, changeTaskStatusAC({todolistId:"todolistId2", id: '587', status: isDone}))

	expect(endState["todolistId2"][1].isDone).toBeTruthy()
})