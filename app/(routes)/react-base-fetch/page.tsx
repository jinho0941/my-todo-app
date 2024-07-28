'use client'

import { api } from '@/app/utils'
import { Todo } from '@/type'
import { useEffect, useState } from 'react'

const Page = () => {
  const [todoList, setTodoList] = useState<Todo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [fetchTime, setFetchTime] = useState<number | null>(null)

  const fetchTodos = async () => {
    const startTime = performance.now()
    try {
      const response = await api.get<Todo[]>('/todos')
      setTodoList(response.data)
    } catch (error) {
      setError('Error fetching todo list')
    } finally {
      const endTime = performance.now()
      setFetchTime(endTime - startTime)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return <div></div>
}

export default Page
