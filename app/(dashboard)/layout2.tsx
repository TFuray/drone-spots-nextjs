import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { userId: string }
}) {
  const { userId } = auth()

  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <>
      <div>Test Routing</div>
      {children}
    </>
  )
}
