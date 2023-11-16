'use client'

import { Box } from '@radix-ui/themes'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const Login = () => {
  const { status, data: session } = useSession()

  return (
    <div className='flex flex-row-reverse '>
      <Box className='text-zinc-200 mr-5 text-lg mt-2 hover:text-zinc-500'>
        {status === 'authenticated' && (
          <Link href='/api/auth/signout'>Sign-Out</Link>
        )}
        {status === 'unauthenticated' && <Link href='/api/auth/signin'></Link>}
      </Box>
    </div>
  )
}

export default Login
