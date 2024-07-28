import { useState } from 'react'

import { TodoTitle } from './todo-title'
import { TodoDescription } from './todo-description'
import { DeleteTodoButton } from './delete-todo-button'
import { CompletionTodoToggle } from './completion-todo-toggle'

type Props = {
  id: string
  title: string
  description: string
  completed: boolean
  onDelete: (id: string) => void
}

export const TodoItem = ({
  id,
  title,
  description,
  completed,
  onDelete,
}: Props) => {
  const [isCompleted, setIsCompleted] = useState(completed)
  const [editTitle, setEditTitle] = useState(title)
  const [editDescription, setEditDescription] = useState(description)

  return (
    <li className='p-2 rounded-md bg-stone-200 relative'>
      <TodoTitle
        id={id}
        title={editTitle}
        isCompleted={isCompleted}
        onUpdate={setEditTitle}
      />
      <TodoDescription
        id={id}
        description={editDescription}
        isCompleted={isCompleted}
        onUpdate={setEditDescription}
      />
      <div className='mt-2 grid grid-cols-2'>
        <CompletionTodoToggle
          id={id}
          isCompleted={isCompleted}
          onToggle={() => setIsCompleted(!isCompleted)}
        />
        <DeleteTodoButton id={id} onDelete={onDelete} />
      </div>
    </li>
  )
}
