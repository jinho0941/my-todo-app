import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-stone-200 min-h-screen text-black flex justify-center items-center'>
      <div className='flex flex-col gap-y-4 text-white'>
        <Link href={'/react-base-fetch'}>
          <button className='bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-md w-full'>
            react base fetch
          </button>
        </Link>
        <Link href={'/react-query-fetch'}>
          <button className='bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-md w-full'>
            react query fetch
          </button>
        </Link>
        <Link href={'/swr-fetch'}>
          <button className='bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-md w-full'>
            swr fetch
          </button>
        </Link>
        <Link href={'/server-component-fetch'}>
          <button className='bg-stone-500 hover:bg-stone-600 px-4 py-2 rounded-md w-full'>
            server component fetch
          </button>
        </Link>
      </div>
    </div>
  )
}
