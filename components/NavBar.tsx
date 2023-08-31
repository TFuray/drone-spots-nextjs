import WeatherBar from './WeatherBar'
import Link from 'next/link';

export default function DefaultNavbar() {
  return (
    <div className='navbar bg-primary opacity-100 text-primary-content h-[128px]'>

      <div className='flex-1'>
        <Link href='/' className='btn btn-ghost normal-case text-xl'>
          Drone Map
        </Link>
      </div>

      <div className='flex-none'>
        <WeatherBar />
      </div>

    </div>
  )
}
