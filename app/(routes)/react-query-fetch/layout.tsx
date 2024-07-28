import { ReactQueryProvider } from '@/components/provider/react-query-provider'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>
}
