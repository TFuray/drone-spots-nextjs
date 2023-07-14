import { WeatherData } from 'types/weather'
import { create } from 'zustand'
import { Coordinates } from 'types/weather'

interface WeatherStore {
  weatherData: WeatherData | null
  setWeatherData: (data: WeatherData) => void
}

interface CoordinatesStore {
  latitude: number |  any
  longitude: number | any
  setCoordinates: (data: Coordinates) => void
}

export const useWeatherStore = create<WeatherStore>(set => ({
  weatherData: null,
  setWeatherData: data => set({ weatherData: data })

}))

export const useCoordinatesStore = create<CoordinatesStore>(set => ({
  latitude: 68.5,
  longitude: -120.7,
  setCoordinates: data =>
    set({ latitude: data.latitude, longitude: data.longitude })
}))
