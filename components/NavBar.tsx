import WeatherBar from './WeatherBar'
import Link from 'next/link';
import Header from './Header';

export default function DefaultNavbar() {
  return (
    <div className='navbar bg-primary-focus opacity-100 text-primary-content h-[128px] rounded'>
      <div className='flex-1'>
        <Link href='/' className='btn normal-case mb-12 rounded-xl'>
          <div className='flex flex-col items-center prose prose-xl'>
            <h3>Drone Map</h3>
            <p className='btn'>#1 Resource to find new places to fly</p>
          </div>
        </Link>
      </div>

      <div className='flex-none'>
        <WeatherBar />
      </div>
    </div>
  )
}
