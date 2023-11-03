import DisplayData from "./DisplayData"
import { useWeatherStore } from 'store/store';

const SideBar = () => {
  const data = useWeatherStore(state =>state.weatherData)

  return (
    <div>
      {data?.location.name ? (
        <DisplayData />
      ): (<></>)}
    </div>
  )
}
export default SideBar