'use server'

import { revalidatePath } from 'next/cache'
import { api } from '../utils'

type ActionType = {
  success: boolean
  message: string
}

export const createTodo = async (
  title: string,
  description: string,
): Promise<ActionType> => {
  try {
    await api.post('/todos', { title, description })

    revalidatePath('/')
    revalidatePath('/server-component-fetch')
    return { success: true, message: '성공' }
  } catch (error) {
    return { success: false, message: '실패' }
  }
}

export const deleteTodo = async (todoId: string): Promise<ActionType> => {
  try {
    await api.delete(`/todos/${todoId}`)

    revalidatePath('/')
    revalidatePath('/server-component-fetch')
    return { success: true, message: '성공' }
  } catch (error) {
    return { success: false, message: '실패' }
  }
}

export const updateTodoCompletion = async (
  todoId: string,
): Promise<ActionType> => {
  try {
    await api.patch(`/todos/${todoId}/completed`, { completed: true })

    revalidatePath('/')
    revalidatePath('/server-component-fetch')
    return { success: true, message: '성공' }
  } catch (error) {
    return { success: false, message: '실패' }
  }
}

export const updateTodoDescription = async (
  todoId: string,
  description: string,
): Promise<ActionType> => {
  try {
    await api.patch(`/todos/${todoId}/description`, {
      description,
    })

    revalidatePath('/')
    revalidatePath('/server-component-fetch')
    return { success: true, message: '성공' }
  } catch (error) {
    return { success: false, message: '실패' }
  }
}

export const updateTodoTitle = async (
  todoId: string,
  title: string,
): Promise<ActionType> => {
  try {
    await api.patch(`/todos/${todoId}/title`, { title })

    revalidatePath('/')
    revalidatePath('/server-component-fetch')
    return { success: true, message: '성공' }
  } catch (error) {
    return { success: false, message: '실패' }
  }
}
