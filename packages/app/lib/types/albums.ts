import { AlbumInfo } from './album-infos'

export interface AllAlbums {
  albums: Album[]
}

export interface Album {
  id: number
  discogsId: number
  displayTitle: string
  resourceUrl: string
  imageUrl?: string
  stats: Stats
  type: string
  comment?: string
  uri: string
  listened: boolean
  rating: number

  albumInfo?: AlbumInfo
}

export interface Stats {
  community: Community
}

export interface Community {
  in_wantlist: number
  in_collection: number
}
