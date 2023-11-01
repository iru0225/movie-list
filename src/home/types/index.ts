interface MoviesAPIResponse {
  page: string
  next: string,
  entries: number
  results: {
    [_key: string]: any
  }[]
}