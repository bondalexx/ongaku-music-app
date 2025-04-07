export interface TrendingTracksResponse {
    collaborative:boolean,
    description:string,
    external_urls:object,
    followers:object,
    href:string,
    id:string,
    images:object[],
    name:string,
    owner:object,
    primary_color:number|null,
    public:boolean,
    snapshot_id:string,
    tracks:TrackObject,
    type:string,
    uri:string
}

export interface TrackObject {
    href:string,
    items:TrackInfo[],
    limit:number,
    next:string | null,
    offset:number,
    previous:string | null,
    total:number
}

export interface TrendingTracksState {
    tracks: TrendingTracksResponse | null;
    loading: boolean;
}

export interface TrackInfo {
    added_at: string;
    added_by: object;
    is_local: boolean;
    track: Track;
    video_thumbnail: object;
}

export interface Track {
    album: Album;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    episode: boolean;
    explicit: boolean;
    external_ids: object;
    external_urls: object;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string | null;
    track: boolean;
    track_number: number;
    type: string;
    uri: string;
}

export interface Artist {
    external_urls: object;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface Album{
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    external_urls: object;
    href: string;
    id: string;
    images: AlbumImage[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}

export interface AlbumImage{
    height: number;
    url: string;
    width: number
}