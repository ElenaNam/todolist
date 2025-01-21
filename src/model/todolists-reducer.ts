import { v1 } from 'uuid'
import { FilterValuesType, TodolistType } from '../App'


const initialState: TodolistType[] = []

export type DeleteTodolistAction = ReturnType<typeof deleteTodolistAC>
export type CreateTodolistAction = ReturnType<typeof createTodolistAC>
export type ChangeTodolistTitleAction = ReturnType<typeof changeTodolistTitleAC>
export type ChangeTodolistFilterAction = ReturnType<typeof changeTodolistFilterAC>

type Actions = DeleteTodolistAction | CreateTodolistAction | ChangeTodolistTitleAction | ChangeTodolistFilterAction

export const deleteTodolistAC = (id: string) => {
	return {type: 'delete_todolist', payload: {id: id } } as const
}

export const createTodolistAC = (title: string) => {
	return {type: 'create_todolist', payload: {id: v1(), title: title}} as const
}

export const changeTodolistTitleAC = ({id, title}: {id: string, title: string}) => {
	return {type: 'change_todolist_title', payload: {id: id, title: title}} as const
}

export const changeTodolistFilterAC = ({id, filter}: {id: string, filter: FilterValuesType}) => {
	return {type: 'change_todolist_filter', payload: {id: id, filter: filter}} as const
}

export const todolistsReducer = (state: TodolistType[] = initialState, action: Actions): TodolistType[] => {
	switch (action.type) {
		case 'delete_todolist': 
			return state.filter(todolist => todolist.id !== action.payload.id)

		case 'create_todolist':
			const newTodolist: TodolistType = {id: action.payload.id, title: action.payload.title, filter: 'all'}
			return [...state, newTodolist]
		
		case 'change_todolist_title': 
			const newState = state.map((todolist) =>
				todolist.id === action.payload.id ? { ...todolist, title: action.payload.title } : todolist
			);
			return newState

		case 'change_todolist_filter': 
			return state.map((todolist) =>
				todolist.id === action.payload.id ? { ...todolist, filter: action.payload.filter } : todolist
			);

		
		default:
			return state
	}

	
}