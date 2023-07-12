export interface Coordinates {
  info: Info
  options: Options
  results: Result[]
}

export interface Info {
  statuscode: number
  copyright: Copyright
  messages: any[]
}

export interface Copyright {
  text: string
  imageUrl: string
  imageAltText: string
}

export interface Options {
  maxResults: number
  ignoreLatLngInput: boolean
}

export interface Result {
  providedLocation: ProvidedLocation
  locations: Location[]
}

export interface Location {
  street: string
  adminArea6: string
  adminArea6Type: string
  adminArea5: string
  adminArea5Type: string
  adminArea4: string
  adminArea4Type: string
  adminArea3: string
  adminArea3Type: string
  adminArea1: string
  adminArea1Type: string
  postalCode: string
  geocodeQualityCode: string
  geocodeQuality: string
  dragPoint: boolean
  sideOfStreet: string
  linkId: string
  unknownInput: string
  type: string
  latLng: LatLng
  displayLatLng: LatLng
  mapUrl: string
}

export interface LatLng {
  lat: number
  lng: number
}

export interface ProvidedLocation {
  location: string
}
