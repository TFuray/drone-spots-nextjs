import WeatherBar from "./WeatherBar"

export default function DefaultNavbar() {
  return (
    <div className='navbar bg-primary opacity-80 text-primary-content'>
      <a href="/" className='btn btn-ghost normal-case text-xl'>Drone Map</a>
      <div>
        <WeatherBar/>
      </div>
    </div>
  )
}
