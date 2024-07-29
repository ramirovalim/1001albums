export interface Album {
  id: number
  main_release: number
  most_recent_release: number
  resource_url: string
  uri: string
  versions_url: string
  main_release_url: string
  most_recent_release_url: string
  num_for_sale: number
  lowest_price: number
  images: Image[]
  genres: string[]
  styles: string[]
  year: number
  tracklist: Tracklist[]
  artists: Extraartist[]
  title: string
  notes: string
  data_quality: string
  videos: Video[]
}

export interface Video {
  uri: string
  title: string
  description: string
  duration: number
  embed: boolean
}

export interface Tracklist {
  position: string
  type_: string
  title: string
  extraartists: Extraartist[]
  duration: string
}

export interface Extraartist {
  name: string
  anv: string
  join: string
  role: string
  tracks: string
  id: number
  resource_url: string
}

export interface Image {
  type: string
  uri: string
  resource_url: string
  uri150: string
  width: number
  height: number
}
