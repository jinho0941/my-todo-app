import { ServerCompletionTodoToggle } from './completion-todo-toggle'
import { ServerDeleteTodoButton } from './delete-todo-button'
import { ServerTodoDescription } from './todo-description'
import { ServerTodoTitle } from './todo-title'

type Props = {
  id: string
  title: string
  description: string
  completed: boolean
}

export const ServerTodoItem = ({
  id,
  title,
  description,
  completed,
}: Props) => {
  return (
    <li className='p-2 rounded-md bg-stone-200 relative'>
      <ServerTodoTitle id={id} title={title} isCompleted={completed} />
      <ServerTodoDescription
        id={id}
        description={description}
        isCompleted={completed}
      />
      <div className='mt-2 grid grid-cols-2'>
        <ServerCompletionTodoToggle id={id} isCompleted={completed} />
        <ServerDeleteTodoButton id={id} />
      </div>
    </li>
  )
}
