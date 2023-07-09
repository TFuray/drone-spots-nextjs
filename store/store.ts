import { WeatherData } from 'types/weather'
import { create } from 'zustand'

interface WeatherStore {
  weatherData: WeatherData | null
  setWeatherData: (data: WeatherData) => void
}

export const useWeatherStore = create<WeatherStore>(set => ({
  weatherData: null,
  setWeatherData: data => set({ weatherData: data })
}))
