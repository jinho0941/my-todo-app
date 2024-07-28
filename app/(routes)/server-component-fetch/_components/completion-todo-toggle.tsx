'use client'
import { toast } from 'sonner'
import { useTransition } from 'react'

import { Loading } from '@/components/loading'
import { updateTodoCompletion } from '@/app/action/todo'

type Props = {
  id: string
  isCompleted: boolean
}

export const ServerCompletionTodoToggle = ({ id, isCompleted }: Props) => {
  const [isPending, startTransition] = useTransition()

  const handleCompletionToggle = () => {
    startTransition(async () => {
      const action = await updateTodoCompletion(id)
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
        onClick={handleCompletionToggle}
        className={`py-1 px-2 rounded-md border text-xs ${
          isCompleted
            ? 'bg-sky-500 text-white'
            : 'bg-green-500 text-white hover:bg-green-600'
        }`}
        disabled={isCompleted}
      >
        {isCompleted ? '완료됨' : '완료하기'}
      </button>
    </>
  )
}
