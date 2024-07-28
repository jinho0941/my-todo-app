'use client'

import { toast } from 'sonner'
import { useTransition } from 'react'

import { Loading } from '@/components/loading'
import { deleteTodo } from '@/app/action/todo'

type Props = {
  id: string
}

export const ServerDeleteTodoButton = ({ id }: Props) => {
  const [isPending, startTransition] = useTransition()

  const handleDelete = () => {
    startTransition(async () => {
      const action = await deleteTodo(id)
      if (!action.success) {
        toast.error(action.message)
        return
      }
      toast.success(action.message)
    })
  }

  return (
    <>
      {isPending && <Loading />}
      <button
        onClick={handleDelete}
        className='ml-2 py-1 px-2 rounded-md border bg-red-500 text-white hover:bg-red-600 text-xs'
      >
        삭제
      </button>
    </>
  )
}
