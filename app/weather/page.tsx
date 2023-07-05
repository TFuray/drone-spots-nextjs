
import Header from "components/Header";
import WeatherPage from "./WeatherPage";

const page = () => {

  const apiKey = process.env.API_KEY;
  const url = `http://api.weatherapi.com/v1`

  return (
    <>
      <Header>Get Flying Conditions</Header>

      <WeatherPage />
    </>
  )
}
export default page