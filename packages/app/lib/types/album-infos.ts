export interface AlbumInfo {
  id?: number
  discogsId: number
  title: string
  year: number
  images: Image[]
  artists: Artist[]
  trackList: Track[]
  genres: string[]
  styles: string[]
  uri: string
  numForSale: number
  lowestPrice: number
  notes?: string
  videos: Video[]
  resourceUrl: string
  mainRelease: number
  mainReleaseUrl: string
  mostRecentRelease: number
  mostRecentReleaseUrl: string
  versionsUrl: string
  dataQuality: string
}
export interface Image {
  id?: number
  type: string
  uri: string
  resourceUrl: string
  uri150: string
  width: number
  height: number
}

export interface Artist {
  id?: number
  discogsId: number
  name: string
  anv: string
  join: string
  role: string
  tracks: string
  resourceUrl: string
}

export interface Track {
  id?: number
  position: string
  type: string
  title: string
  duration: string
  extraArtists?: Artist[]
  albumInfoId?: number
}

export interface Video {
  uri: string
  title: string
  description: string
  duration: number
  embed: boolean
  albumInfoId?: number
}

