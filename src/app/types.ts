export interface ResponseCache {
    url: string;
    items: Show[];
}

export interface MovieServiceResponse {
    success: boolean;
    error: boolean;
    item: Show;
}
export interface MoviesServiceResponse {
    success: boolean;
    error: boolean;
    items: MoviesResponse[] | null;
}
export interface MoviesResponse {
    score: number;
    show: Show;
}
export interface Show {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres?: (string | null)[] | null;
    status: string;
    runtime?: number | null;
    averageRuntime?: number | null;
    premiered: string;
    ended: string;
    officialSite?: string | null;
    schedule: Schedule;
    rating: Rating;
    weight: number;
    network?: Network | null;
    webChannel?: NetworkOrWebChannel | null;
    dvdCountry?: null;
    externals: Externals;
    image?: Image | null;
    summary?: string | null;
    updated: number;
    _links: Links;
}
export interface Schedule {
    time: string;
    days?: (string | null)[] | null;
}
export interface Rating {
    average?: number | null;
}
export interface Network {
    id: number;
    name: string;
    country: Country;
    officialSite?: string | null;
}
export interface Country {
    name: string;
    code: string;
    timezone: string;
}
export interface NetworkOrWebChannel {
    id: number;
    name: string;
    country: Country;
    officialSite: string;
}
export interface Externals {
    tvrage?: null;
    thetvdb?: number | null;
    imdb?: string | null;
}
export interface Image {
    medium: string;
    original: string;
}
export interface Links {
    self: Self;
    previousepisode: Previousepisode;
}
export interface Self {
    href: string;
}
export interface Previousepisode {
    href: string;
    name: string;
}
