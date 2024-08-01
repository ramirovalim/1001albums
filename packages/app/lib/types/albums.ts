export interface AllAlbums {
  albums: Album[]
}

export interface Album {
  type: string
  id: number
  comment: string
  uri: string
  resource_url: string
  image_url: string
  display_title: string
  stats: Stats
}

export interface Stats {
  community: Community
}

export interface Community {
  in_wantlist: number
  in_collection: number
}
