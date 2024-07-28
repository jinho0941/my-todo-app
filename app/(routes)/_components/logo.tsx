import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href={'/'} className='flex justify-center'>
      <span className='text-2xl underline text-stone-800 p-2 hover:bg-stone-300 rounded-md transition-all'>
        HOME
      </span>
    </Link>
  )
}
