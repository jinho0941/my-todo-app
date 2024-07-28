import { useState } from 'react'

type Props = {
  onCreate: (title: string, description: string) => void
}

export const CreateTodoForm = ({ onCreate }: Props) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onCreate(title, description)
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-y-2'>
      <span>제목</span>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type='text'
        className='border rounded-lg border-black p-2'
      />
      <span>설명</span>
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className='resize-none border rounded-lg border-black p-2'
      />
      <button
        type='submit'
        className='bg-stone-500 text-white rounded-lg hover:bg-stone-600 py-2'
      >
        생성
      </button>
    </form>
  )
}
