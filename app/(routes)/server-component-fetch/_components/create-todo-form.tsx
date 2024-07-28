'use client'

import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'
import { useState, useTransition } from 'react'

import { createTodo } from '@/app/action/todo'

export const ServerCreateTodoForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent) => {
    startTransition(async () => {
      const action = await createTodo(title, description)
      if (!action.success) {
        toast.error(action.message)
        return
      }
      toast.success(action.message)
    })
    e.preventDefault()
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
        className='bg-stone-500 text-white rounded-lg hover:bg-stone-600 py-2 flex justify-center disabled:bg-stone-500 disabled:cursor-not-allowed'
        disabled={isPending}
      >
        {isPending ? <Loader2 className='animate-spin' /> : '생성'}
      </button>
    </form>
  )
}
