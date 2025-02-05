import { createAction, createReducer, nanoid } from '@reduxjs/toolkit'
import { TasksState } from "@/app/App";
import { createTodolistAC, deleteTodolistAC } from './todolists-reducer';

const initialState: TasksState = {}

export const deleteTaskAC = createAction<{todolistId: string, id: string}>('tasks/deleteTask')

export const createTaskAC = createAction('tasks/createTask', (todolistId: string, title: string) => {
	return {payload: { id: nanoid(), todolistId, title }}
})

export const changeTaskTitleAC = createAction<{todolistId: string, id: string, title: string}>('tasks/changeTaskTitle')

export const changeTaskStatusAC = createAction<{todolistId: string, id: string, status: boolean}>('tasks/changeTaskStatus')

export const tasksReducer = createReducer(initialState, builder => {
	builder
		.addCase(deleteTodolistAC, (state, action) => {
			delete state[action.payload.id]
		})
		.addCase(createTodolistAC, (state, action) => {
			state[action.payload.id] = []
		})
		.addCase(deleteTaskAC, (state, action) => {
			state[action.payload.todolistId] = state[action.payload.todolistId].filter(task => task.id !== action.payload.id)
		})
		.addCase(createTaskAC, (state, action) => {
			state[action.payload.todolistId].push({
				...action.payload,  
				isDone: false
			})
		})
		.addCase(changeTaskTitleAC, (state, action) => {
			state[action.payload.todolistId] = state[action.payload.todolistId].map(task => task.id === action.payload.id ? {...task, title: action.payload.title} : task)
		})
		.addCase(changeTaskStatusAC, (state, action) => {
			state[action.payload.todolistId] = state[action.payload.todolistId].map(task => task.id === action.payload.id ? {...task, isDone: action.payload.status} : task)
		})
})