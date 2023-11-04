'use client'

import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import DropDown from './DropDown'
import Header from './Header'
import WeatherBar from './WeatherBar'
import { MainNav } from './MainNav'


export default function DefaultNavbar() {




  return (
    <div>
      <nav className='bg-white dark:bg-gray-800  shadow '>
        <div className='flex items-center justify-between h-16'>
          <div className=' flex items-center'>
            <div className='btn btn-link no-underline hover:no-underline'>
              <Link href='/' className=' normal-case rounded-xl '>
                <div className='flex flex-col items-center prose prose-xl'>
                  <h2 className='text-secondary-focus font-bold drop-shadow-[0_2.2px_2.2px_rgba(1,1,1,1.8)]'>
                    Drone Map
                  </h2>
                </div>
              </Link>
            </div>
            <div className=' md:block'>
              <MainNav/>
            </div>
          </div>
          <div className='block'>
            <div className='flex items-center ml-4 md:ml-6'>
              <div className='relative ml-3'>
                <div className='relative flex text-left'>
                  {/* <DropDown /> */}
                  <div>
                    <button
                      type='button'
                      className='  flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500'
                      id='options-menu'
                    >
                      <UserButton afterSignOutUrl='/' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

// <nav>
//   <div className='flex justify-between navbar text-black'>
//     <div className='btn btn-link no-underline hover:no-underline'>
//       <Link href='/' className=' normal-case rounded-xl '>
//         <div className='flex flex-col items-center prose prose-xl'>
//           <h2 className='text-secondary-focus font-bold drop-shadow-[0_2.2px_2.2px_rgba(1,1,1,1.8)]'>
//             Drone Map
//           </h2>
//         </div>
//       </Link>
//     </div>

//     <div className='flex-none m-4'>
//       <WeatherBar />
//     </div>
//     <div className='m-4'>
//       <UserButton />
//     </div>
//   </div>
// </nav>
