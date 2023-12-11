import { mountStoreDevtool } from 'simple-zustand-devtools'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import {
  Coordinates,
  DraggingCoordinates,
  // Search,
  WeatherData
} from '../types/weather'

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

interface SearchStore {
  isSearching: boolean | boolean
  setSearch: (data: boolean) => void
}

export const useSearchStore = create<SearchStore>(set => ({
  isSearching: false,
  setSearch: data => set({ isSearching: true })
}))

export const useWeatherStore = create<WeatherStore>(set => ({
  weatherData: null,
  setWeatherData: data => set({ weatherData: data })
}))

export const useCoordinatesStore = create<CoordinatesStore>(set => ({
  latitude: 38.5,
  longitude: -101.7,
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
