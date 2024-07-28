import { Logo } from './_components/logo'

const RoutesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-stone-200 min-h-screen text-black flex flex-col justify-center items-center'>
      <Logo />
      {children}
    </div>
  )
}

export default RoutesLayout
