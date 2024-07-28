'use client'

import { useState, useTransition } from 'react'

import { toast } from 'sonner'
import { Loading } from '@/components/loading'
import { updateTodoDescription } from '@/app/action/todo'

type Props = {
  id: string
  description: string
  isCompleted: boolean
}

export const ServerTodoDescription = ({
  id,
  description,
  isCompleted,
}: Props) => {
  const [isDescriptionEdit, setIsDescriptionEdit] = useState(false)
  const [editDescription, setEditDescription] = useState(description)

  const [isPending, startTransition] = useTransition()

  const onEdit = () => {
    setIsDescriptionEdit(true)
  }

  const handleDescriptionEdit = () => {
    startTransition(async () => {
      const action = await updateTodoDescription(id, editDescription)
      if (!action.success) {
        toast.error(action.message)
        return
      }
      toast.success(action.message)
    })
    setIsDescriptionEdit(false)
  }

  const handleCancelEdit = () => {
    setEditDescription(description)
    setIsDescriptionEdit(false)
  }

  return (
    <>
      {isPending && <Loading />}
      <p
        className={`break-words ${
          isCompleted ? 'line-through text-gray-500' : ''
        }`}
      >
        내용:<span className='ml-1'>{description}</span>
      </p>

      {isDescriptionEdit ? (
        <>
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            autoFocus
            className='border rounded-md px-2 w-full'
          />
          <div className='mt-2 grid grid-cols-2 gap-x-1'>
            <button
              onClick={handleCancelEdit}
              className='w-full py-1 px-2 rounded-md border bg-red-500 text-white hover:bg-red-600 text-xs'
            >
              취소
            </button>
            <button
              onClick={handleDescriptionEdit}
              className='w-full py-1 px-2 rounded-md border bg-green-500 text-white hover:bg-green-600 text-xs'
            >
              완료
            </button>
          </div>
        </>
      ) : (
        <button
          onClick={onEdit}
          className='py-1 px-2 rounded-md border bg-zinc-500 text-white hover:bg-zinc-600 text-xs w-full block'
        >
          내용 수정
        </button>
      )}
    </>
  )
}

export default ServerTodoDescription
