import { beforeEach, expect, test } from 'vitest'
import { TodolistType } from '../app/App'
import {createTodolistAC, changeTodolistTitleAC, changeTodolistFilterAC, deleteTodolistAC, todolistsReducer} from './todolists-reducer'
import { nanoid } from '@reduxjs/toolkit'


let todolistId1: string
let todolistId2: string
let startState: TodolistType[] = []

beforeEach(()=>{
	todolistId1 = nanoid()
	todolistId2 = nanoid() 

	startState = [
		{id: todolistId1, title: 'What to learn', filter: 'all'},
		{id: todolistId2, title: 'What to buy', filter: 'all'}
	] 
})


test('correct todolist should be deleted', () => {
	// Действие
	const endState = todolistsReducer(startState, deleteTodolistAC({id: todolistId1}))
	// const action = {
	//     type: 'delete_todolist', 
	//     payload: {
	//         id: todolistId1
	//     } 
	// } as const

	// const endState = todolistsReducer(startState, action)

	// Проверка 
	expect(endState.length).toBe(1)
	expect(endState[0].id).toBe(todolistId2) 
})

test('correct todolist should be created', () => {
	// Действие
	const title = 'New todolist'
	const endState = todolistsReducer(startState, createTodolistAC(title))

	// Проверка
	expect(endState.length).toBe(3)
	expect(endState[2].title).toBe('New todolist')
})

test('correct todolist should change its title', () => {
	const title = 'New title'
	const endState = todolistsReducer(startState, changeTodolistTitleAC({id: todolistId2, title}))

	expect(endState[0].title).toBe('What to learn')
	expect(endState[1].title).toBe(title)
})

test('correct todolist should change its filter', () => {
	const filter = 'completed'
	const endState = todolistsReducer(startState, changeTodolistFilterAC({id: todolistId2, filter}))
	
	expect(endState[0].filter).toBe('all')
	expect(endState[1].filter).toBe('completed')
})