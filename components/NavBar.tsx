import WeatherBar from './WeatherBar'
import Link from 'next/link';
import Header from './Header';

export default function DefaultNavbar() {
  return (
    <div className='navbar text-black h-[128px] rounded'>
      <div className='flex-1'>
        <Link href='/' className='btn btn-ghost normal-case mb-12 rounded-xl'>
          <div className='flex flex-col items-center prose prose-xl'>
            <h2
              className='text-secondary font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
'
            >
              Drone Map
            </h2>
            <h4
              className='btn btn-ghost text-lg text-secondary drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
'
            >
              #1 Resource to find new places to fly
            </h4>
          </div>
        </Link>
      </div>

      <div className='flex-none'>
        <WeatherBar />
      </div>
    </div>
  )
}
