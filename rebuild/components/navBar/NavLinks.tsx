'use client'

import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { RiMapFill } from 'react-icons/ri'
import { TbDrone } from 'react-icons/tb'

import { cn } from '@/lib/utils'
import { Box } from '@radix-ui/themes'
import { useSession } from 'next-auth/react'

const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname()

  const { status, data: session } = useSession()

  const routes = [
    {
      href: `/`,
      label: 'Dashboard',
      active: pathname === `/`
    },
    {
      href: `/spots/add-spot`,
      label: 'Add Spot',
      active: pathname === `/addspot`
    },
    {
      href: `/spots`,
      label: 'My Spots',
      active: pathname === `/spots`
    },
    {
      href: `/settings`,
      label: 'Settings',
      active: pathname === `/settings`
    }
  ]

  return (
    <>
      {/* <div className=' flex w-1/2 justify-between place-items-center	'> */}
        <div className=''>
          <Link href='/'>
            <div className='h-[58px] w-[58px] relative'>
              <div className='absolute '>
                <RiMapFill stroke='gray' strokeWidth='1' size='68px' />
              </div>
              <div className='absolute left-4 top-4'>
                <TbDrone
                  stroke='red '
                  strokeWidth='1'
                  color='white'
                  size='36px'
                />
              </div>
            </div>
          </Link>
        </div>
        {routes.map(route => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              ' mt-2 text-lg transition-colors hover:text-zinc-500',
              route.active ? 'text-zinc-200' : 'text-zinc-400'
            )}
          >
            {route.label}
          </Link>
        ))}
      {/* </div> */}
      {/* <div className='flex'>
        <Box>
          {status === 'authenticated' && (
            <Link href='/api/auth/signout'>Sign-Out</Link>
          )}
          {status === 'unauthenticated' && (
            <Link href='/api/auth/signin'></Link>
          )}
        </Box>
      </div> */}
    </>
  )
}
export default MainNav
