import { createAction, createReducer } from '@reduxjs/toolkit'
import { TasksState } from "../app/App";
import { createTodolistAC, deleteTodolistAC } from './todolists-reducer';

const initialState: TasksState = {}

export const deleteTaskAC = createAction('tasks/deleteTask', (todolistId: string, id: string) => {
	return {payload: { todolistId, id}}
})

export const createTaskAC = createAction('tasks/createTask', (todolistId: string, title: string) => {
	return {payload: { todolistId, title}}
})

export const changeTaskTitleAC = createAction('tasks/changeTaskTitle', (todolistId: string, id: string, title: string) => {
	return {payload: { todolistId, id, title}}
})

export const changeTaskStatusAC = createAction('tasks/changeTaskStatus', (todolistId: string, id: string, status: string) => {
	return {payload: { todolistId, id, status}}
})

export const tasksReducer = createReducer(initialState, builder => {
	builder
		.addCase(deleteTodolistAC, (state, action) => {
			delete state[action.payload.id]
		})
		.addCase(createTodolistAC, (state, action) => {
			state[action.payload.id] = []
		})
		.addCase(deleteTaskAC, (state, action) => {
			
		})
		.addCase(changeTaskTitleAC, (state, action) => {

		})
		.addCase(deleteTaskAC, (state, action) => {

		})
		.addCase(changeTaskStatusAC, (state, action) => {

		})

})

// export const tasksReducer = (state: TasksState = initialState, action: Actions): TasksState => {
// 	switch (action.type) {

// 		case 'delete_task': 
// 			const newState = {...state, [action.payload.todolistId]: state[action.payload.todolistId].filter(task => task.id !== action.payload.id)}
// 			return newState

// 		case 'create_task':
// 			return {...state, [action.payload.todolistId]: [ {id: v1(), title: action.payload.title, isDone: false}, ...state[action.payload.todolistId]]}

// 		case 'change_task_title': 
// 			return {...state, [action.payload.todolistId]: state[action.payload.todolistId].map(task => task.id === action.payload.id ? {...task, title: action.payload.title} : task)}

// 		case 'change_task_status': 
// 			return {...state, [action.payload.todolistId]: state[action.payload.todolistId].map(task => task.id === action.payload.id ? {...task, isDone: action.payload.status} : task)}

// 		default:
// 			return state
// 	}
// }