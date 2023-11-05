'use client'

import Link from 'next/link'
import { RiMapFill } from 'react-icons/ri'
import { TbDrone } from 'react-icons/tb'
import { useParams, usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname()

  const routes = [
    {
      href: `/`,
      label: 'Dashboard',
      active: pathname === `/`
    },
    {
      href: `/addspot`,
      label: 'Add Spot',
      active: pathname === `/addspot`
    },
    {
      href: `/myspots`,
      label: 'My Spots',
      active: pathname === `/myspots`
    },
    {
      href: `/settings`,
      label: 'Settings',
      active: pathname === `/settings`
    }
  ]

  return (
    <div className=' flex w-1/2 justify-between place-items-center	'>
      <div>
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
            'text-lg transition-colors hover:text-zinc-800',
            route.active ? 'text-zinc-800' : 'text-zinc-500'
          )}
        >
          {route.label}
        </Link>
      ))}
    </div>
  )
}
export default MainNav
