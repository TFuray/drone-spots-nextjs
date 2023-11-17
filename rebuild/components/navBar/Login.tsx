'use client'

import { Avatar, Box, DropdownMenu, Text } from '@radix-ui/themes'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const Login = () => {
  const { status, data: session } = useSession()

  return (
    <div className='flex flex-row-reverse '>
      <Box className='text-zinc-200 mr-5 text-lg mt-2 hover:text-zinc-500'>
        {status === 'authenticated' && (
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Avatar
                className='cursor-pointer'
                src={session.user!.image!}
                fallback='?'
                size='2'
              />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Label>
                <Text size='2'>{session.user!.email}</Text>
              </DropdownMenu.Label>
              <DropdownMenu.Item>
                <Link href='/api/auth/signout'>Sign-Out</Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        )}
        {status === 'unauthenticated' && (
          <Link href='/api/auth/signin'>Sign-In</Link>
        )}
      </Box>
    </div>
  )
}

export default Login
