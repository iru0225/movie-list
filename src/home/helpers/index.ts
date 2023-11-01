/** function for manipulating the list of data from API response */
export const moviesMapper = (data: MoviesAPIResponse) => {
  const results = data.results.map((item) => {
    return {
      id: item.id,
      title: item.titleText.text,
      image: JSON.stringify(item.primaryImage),
      releaseYear: item.releaseYear.year
    }
  })

  return {
    ...data,
    results
  }
}