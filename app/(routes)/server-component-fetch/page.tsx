import { api } from '@/app/utils'
import { Todo } from '@/type'
import { ServerTodoItem } from './_components/todo-item'

const fetchTodo = async () => {
  try {
    const response = await api.get<Todo[]>('/todos')
    const todoList = response.data
    return todoList
  } catch (error) {
    throw new Error('todo 데이터를 가져오지 못했습니다.')
  }
}

const Page = async () => {
  const todoList = await fetchTodo()

  return (
    <div className='flex flex-col gap-y-2'>
      <ul className='h-[300px] w-[300px] overflow-y-scroll overflow-x-hidden p-2 bg-slate-100 rounded-md space-y-4'>
        {todoList.map((todo) => (
          <ServerTodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
          />
        ))}
      </ul>
    </div>
  )
}

export default Page
