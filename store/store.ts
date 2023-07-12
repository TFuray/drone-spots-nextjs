import { WeatherData } from 'types/weather'
import { create } from 'zustand'

interface WeatherStore {
  weatherData: WeatherData | null
  setWeatherData: (data: WeatherData) => void
}

interface Coordinates {
  latitude: number |  any
  longitude: number | any
  setCoordinates: (data: Coordinates) => void
}

export const useWeatherStore = create<WeatherStore>(set => ({
  weatherData: null,
  setWeatherData: data => set({ weatherData: data })

}))

export const useCoordinatesStore = create<Coordinates>(set => ({
  latitude: null,
  longitude: null,
  setCoordinates: data => set({ latitude: data.latitude, longitude: data.longitude })
}))