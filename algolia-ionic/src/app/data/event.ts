export interface Event {
  objectID?: string;
  name: string;
  date: string;
  description: string;
  _geoloc: {
    lat: number,
    lng: number
  }
}
