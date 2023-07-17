import { mountStoreDevtool } from 'simple-zustand-devtools'
import { Coordinates, DraggingCoordinates, WeatherData } from 'types/weather'
import { create } from 'zustand'

interface WeatherStore {
  weatherData: WeatherData | null
  setWeatherData: (data: WeatherData) => void
}

interface CoordinatesStore {
  latitude: number | any
  longitude: number | any
  setCoordinates: (data: Coordinates) => void
}
interface DraggingCoordinatesStore {
  lat: number | any
  lng: number | any
  setDraggingCoordinates: (data: DraggingCoordinates) => void
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

export const useDraggingCoordinatesStore = create<DraggingCoordinatesStore>(
  set => ({
    lat: 38,
    lng: -120.7,
    setDraggingCoordinates: data => set({ lat: data.lat, lng: data.lng })
  })
)

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('WeatherStore', useWeatherStore)
  mountStoreDevtool('CoordinatesStore', useCoordinatesStore)
  mountStoreDevtool('DraggingCoordinatesStore', useDraggingCoordinatesStore)
}
