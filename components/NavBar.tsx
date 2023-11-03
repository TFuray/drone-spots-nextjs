import WeatherBar from './WeatherBar'
import Link from 'next/link';
import Header from './Header';
import { UserButton } from '@clerk/nextjs';

export default function DefaultNavbar() {
  return (
    <div className='flex justify-between navbar text-black'>
      <div className='flex'>
        <div className='btn btn-link no-underline hover:no-underline'>
          <Link href='/' className=' normal-case mb-12 rounded-xl '>
            <div className='flex flex-col items-center prose prose-xl'>
              <h2
                className='text-secondary-focus font-bold drop-shadow-[0_2.2px_2.2px_rgba(1,1,1,1.8)]
'
              >
                Drone Map
              </h2>
              <h4
                className=' text-lg text-secondary-focus drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
'
              >
                #1 Resource to find new places to fly
              </h4>
            </div>
          </Link>

        </div>
      </div>

      <div className='flex-none'>
        <WeatherBar />
      </div>
      <div className='mr-10'>
        <UserButton/>
      </div>
    </div>
  )
}
