import { getMoviesAPI, searchMoviesAPI } from "../api/home.api"
import { moviesMapper } from "../helpers"

export const getMoviesAdapter = async (query: {[_key: string]: string}, page: number) => {
  try {
    const response = await getMoviesAPI(query, page)
    return response.data
  } catch (error) {
    return {}
  }
}

export const searchMoviesAdapter = async (title: string, page: number) => {
  try {
    const response = await searchMoviesAPI(title, page)
    return response.data
  } catch (error) {
    return {}
  }
}

export const getHomeServerSide = async () => {
  const initialMoviesData = await getMoviesAdapter({}, 1)
  return {
    props: {
      initialMoviesData
    }
  }
}