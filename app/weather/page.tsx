import Header from '../components/Header'
import WeatherPage from './WeatherPage'

const page = () => {
  const apiKey = process.env.API_KEY
  const url = `http://api.weatherapi.com/v1`

  return (
    <>
      <div className='text-center'>
        <Header>Get Flying Conditions</Header>
      </div>

      <div className='grid justify-center'>
        <WeatherPage />
      </div>
    </>
  )
}
export default page
