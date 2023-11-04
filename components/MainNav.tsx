import { cn } from 'lib/utiils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  const routes = [
    {
      href: '/',
      label: 'Home',
      active: pathname === '/'
    },
    {
      href: '/posts/create',
      label: 'Add Spot',
      active: pathname === '/posts/create'
    },
    {
      href: '/posts/myspots',
      label: 'My Spots',
      active: pathname === '/posts/myspots'
    },
    {
      href: '/settings',
      label: 'Settings',
      active: pathname === '/settings'
    }
  ]

  return (
    <nav className={cn('flex items-center space-x-4 lg:space-x-6', className)}>
      {routes.map(route => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-secondary-focus',
            route.active
              ? 'text-black font-bold dark:text-white'
              : 'text-gray-500'
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}
