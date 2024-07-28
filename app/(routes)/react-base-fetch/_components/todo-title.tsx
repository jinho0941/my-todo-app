import { useState, useTransition } from 'react'

import { api } from '@/app/utils'
import { toast } from 'sonner'
import { Loading } from '@/components/loading'

type Props = {
  id: string
  title: string
  isCompleted: boolean
  onUpdate: (newTitle: string) => void
}

export const TodoTitle = ({ id, title, isCompleted, onUpdate }: Props) => {
  const [isTitleEdit, setIsTitleEdit] = useState(false)
  const [editTitle, setEditTitle] = useState(title)

  const [isPending, startTransition] = useTransition()

  const handleTitleEdit = () => {
    if (!editTitle) {
      toast.error('제목을 입력해주세요.')
      return
    }
    startTransition(async () => {
      try {
        await api.patch(`/todos/${id}/title`, { title: editTitle })
        onUpdate(editTitle)
      } catch (error) {
        toast.error('제목 수정에 실패하였습니다.')
      }
    })
    setIsTitleEdit(false)
  }

  const onEdit = () => {
    setIsTitleEdit(true)
  }

  const handleCancelEdit = () => {
    setEditTitle(title)
    setIsTitleEdit(false)
  }

  return (
    <>
      {isPending && <Loading />}
      <h2
        className={`font-bold ${
          isCompleted ? 'line-through text-gray-500' : ''
        }`}
      >
        제목:<span className='ml-1'>{title}</span>
      </h2>

      {isTitleEdit ? (
        <>
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            autoFocus
            className='border rounded-md px-2'
          />
          <div className='mt-2 grid grid-cols-2 gap-x-1'>
            <button
              onClick={handleCancelEdit}
              className='w-full py-1 px-2 rounded-md border bg-red-500 text-white hover:bg-red-600 text-xs'
            >
              취소
            </button>
            <button
              onClick={handleTitleEdit}
              className='w-full py-1 px-2 rounded-md border bg-green-500 text-white hover:bg-green-600 text-xs'
            >
              완료
            </button>
          </div>
        </>
      ) : (
        <button
          onClick={onEdit}
          className='py-1 px-2 rounded-md border bg-slate-500 text-white hover:bg-slate-600 text-xs w-full block'
        >
          제목 수정
        </button>
      )}
    </>
  )
}
