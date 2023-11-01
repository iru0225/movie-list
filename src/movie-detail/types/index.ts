export interface MovieDetailResponse {
  results: MovieDetailType
}

export interface MovieDetailType {
  _id: string
  id: string
  ratingsSummary: RatingsSummary
  episodes: any
  primaryImage: PrimaryImage
  titleType: TitleType
  genres: Genres
  titleText: TitleText
  originalTitleText: OriginalTitleText
  releaseYear: ReleaseYear
  releaseDate: ReleaseDate
  runtime: Runtime
  series: any
  meterRanking: any
  plot: Plot
}

export interface RatingsSummary {
  aggregateRating: number
  voteCount: number
  __typename: string
}

export interface PrimaryImage {
  id: string
  width: number
  height: number
  url: string
  caption: Caption
  __typename: string
}

export interface Caption {
  plainText: string
  __typename: string
}

export interface TitleType {
  text: string
  id: string
  isSeries: boolean
  isEpisode: boolean
  __typename: string
}

export interface Genres {
  genres: Genre[]
  __typename: string
}

export interface Genre {
  text: string
  id: string
  __typename: string
}

export interface TitleText {
  text: string
  __typename: string
}

export interface OriginalTitleText {
  text: string
  __typename: string
}

export interface ReleaseYear {
  year: number
  endYear: any
  __typename: string
}

export interface ReleaseDate {
  day: number
  month: number
  year: number
  __typename: string
}

export interface Runtime {
  seconds: number
  __typename: string
}

export interface Plot {
  plotText: PlotText
  language: Language
  __typename: string
}

export interface PlotText {
  plainText: string
  __typename: string
}

export interface Language {
  id: string
  __typename: string
}
