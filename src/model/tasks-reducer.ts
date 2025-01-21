import { v1 } from "uuid";
import { TasksState } from "../App";

const initialState: TasksState = {}

export type DeleteTaskAction = ReturnType<typeof deleteTaskAC>
export type CreateTaskAction = ReturnType<typeof createTaskAC>
export type ChangeTaskTitleAction = ReturnType<typeof changeTaskTitleAC>
export type ChangeTaskStatusAction = ReturnType<typeof changeTaskStatusAC>
export type CreateTodolistAction = ReturnType<typeof createTodolistAC>
export type DeleteTodolistAction = ReturnType<typeof deleteTodolistAC>

type Actions = DeleteTaskAction | CreateTaskAction | ChangeTaskTitleAction | ChangeTaskStatusAction | CreateTodolistAction | DeleteTodolistAction

export const createTodolistAC = (title: string) => {
	return { type: 'create_todolist', payload: {id: v1(), title} } as const
}
export const deleteTodolistAC = (id: string) => {
	return { type: 'delete_todolist', payload: {id} } as const
}

export const deleteTaskAC = ({todolistId, id}: {todolistId: string, id: string}) => {
	return {type: 'delete_task', payload: {todolistId, id } } as const
}

export const createTaskAC = ({todolistId, title}: {todolistId: string, title: string}) => {
	return {type: 'create_task', payload: {todolistId, title}} as const
}

export const changeTaskTitleAC = (payload: {todolistId: string, id:string, title:string}) => {
	return {type: 'change_task_title', payload: payload} as const
}

export const changeTaskStatusAC = ({todolistId, id, status}: {todolistId: string, id:string, status:boolean}) => {
	return {type: 'change_task_status', payload: {todolistId, id, status}} as const
}

export const tasksReducer = (state: TasksState = initialState, action: Actions): TasksState => {
	debugger
	switch (action.type) {
		case "create_todolist": 
			return {...state, [action.payload.id]: []} 

		case "delete_todolist": 
			delete state[action.payload.id]
			return state

		case 'delete_task': 
			const newState = {...state, [action.payload.todolistId]: state[action.payload.todolistId].filter(task => task.id !== action.payload.id)}
			return newState

		case 'create_task':
			return {...state, [action.payload.todolistId]: [ {id: v1(), title: action.payload.title, isDone: false}, ...state[action.payload.todolistId]]}

		case 'change_task_title': 
			return {...state, [action.payload.todolistId]: state[action.payload.todolistId].map(task => task.id === action.payload.id ? {...task, title: action.payload.title} : task)}

		case 'change_task_status': 
			return {...state, [action.payload.todolistId]: state[action.payload.todolistId].map(task => task.id === action.payload.id ? {...task, isDone: action.payload.status} : task)}

		default:
			return state
	}
}