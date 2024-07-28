import { useTransition } from 'react'
import { api } from '@/app/utils'
import { toast } from 'sonner'
import { Loading } from '@/components/loading'

type Props = {
  id: string
  isCompleted: boolean
  onToggle: () => void
}

export const CompletionTodoToggle = ({ id, isCompleted, onToggle }: Props) => {
  const [isPending, startTransition] = useTransition()

  const handleCompletionToggle = () => {
    startTransition(async () => {
      try {
        await api.patch(`/todos/${id}/completed`, { completed: !isCompleted })
        onToggle()
      } catch (error) {
        toast.error('상태 변경에 실패하였습니다.')
      }
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
