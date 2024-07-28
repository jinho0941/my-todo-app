'use client'

import { api } from '@/app/utils'
import { Loading } from '@/components/loading'
import { Todo } from '@/type'
import { useEffect, useState } from 'react'
import { TodoItem } from './_components/todo-item'
import { CreateTodoForm } from './_components/create-todo-form'

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

  const onCreate = async (title: string, description: string) => {
    try {
      const response = await api.post('/todos', { title, description })
      const todo = response.data
      setTodoList((prev) => [todo, ...prev])
    } catch (error) {
      console.log(error)
    }
  }

  const onDelete = async (id: string) => {
    try {
      await api.delete(`/todos/${id}`)
      setTodoList((prev) => prev.filter((todo) => todo.id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  if (error) {
    return (
      <div className='bg-stone-200 min-h-screen text-black flex justify-center items-center'>
        Error: {error}
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-y-2'>
      <CreateTodoForm onCreate={onCreate} />
      <ul className='h-[300px] w-[300px] overflow-y-scroll overflow-x-hidden p-2 bg-slate-100 rounded-md space-y-4 relative'>
        {isLoading && <Loading />}
        {!isLoading && fetchTime !== null && (
          <div className='text-gray-500 text-sm'>
            Fetch time:{' '}
            <span className='font-bold'>{fetchTime.toFixed(2)} ms</span>
          </div>
        )}
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            onDelete={onDelete}
            completed={todo.completed}
          />
        ))}
      </ul>
    </div>
  )
}

export default Page
