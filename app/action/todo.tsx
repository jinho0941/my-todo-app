'use server'

import { revalidatePath } from 'next/cache'
import { api } from '../utils'

type ActionType = {
  success: boolean
  message: string
}

export const updateTodoTitle = async (
  todoId: string,
  title: string,
): Promise<ActionType> => {
  try {
    await api.patch(`/todos/${todoId}/title`, { title })

    revalidatePath('/server-component-fetch')
    return { success: true, message: '성공' }
  } catch (error) {
    return { success: false, message: '실패' }
  }
}
