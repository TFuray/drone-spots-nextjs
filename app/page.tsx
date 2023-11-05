import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"

export default async function Page({
  children
}: {
  children: React.ReactNode
  }) {
  const {userId} = auth()
  // if (!userId) {
  //   redirect('/sign-in')
  // }

  if (userId) {
    redirect(`/${userId}/home`)
  }
  return (
    <div>
      test
    </div>
  )
}