import WeatherBar from './WeatherBar'

export default function DefaultNavbar() {
  return (
    <div className='navbar bg-primary opacity-100 text-primary-content h-[128px]'>

      <div className='flex-1'>
        <a href='/' className='btn btn-ghost normal-case text-xl'>
          Drone Map
        </a>
      </div>

      <div className='flex-none'>
        <WeatherBar />
      </div>

    </div>
  )
}
