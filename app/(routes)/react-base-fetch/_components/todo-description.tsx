import { useState, useTransition } from 'react'
import { api } from '@/app/utils'
import { toast } from 'sonner'
import { Loading } from '@/components/loading'

type Props = {
  id: string
  description: string
  isCompleted: boolean
  onUpdate: (newDescription: string) => void
}

export const TodoDescription = ({
  id,
  description,
  isCompleted,
  onUpdate,
}: Props) => {
  const [isDescriptionEdit, setIsDescriptionEdit] = useState(false)
  const [editDescription, setEditDescription] = useState(description)
  const [isPending, startTransition] = useTransition()

  const handleDescriptionEdit = () => {
    if (!editDescription) {
      toast.error('내용을 입력해주세요.')
      return
    }
    startTransition(async () => {
      try {
        await api.patch(`/todos/${id}/description`, {
          description: editDescription,
        })
        onUpdate(editDescription)
      } catch (error) {
        toast.error('내용 수정에 실패하였습니다.')
      }
    })
    setIsDescriptionEdit(false)
  }

  const onEdit = () => {
    setIsDescriptionEdit(true)
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
