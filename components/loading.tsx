import { Loader2 } from 'lucide-react'

export const Loading = () => {
  return (
    <div className='absolute inset-0 bg-black/50 flex justify-center items-center rounded-md'>
      <Loader2 className='text-white h-14 w-14 animate-spin' />
    </div>
  )
}
