import { API_BASE_URL, API_URLS } from '@/shared/constants'
import axios from 'axios'

export const getMoviesAPI = async (query: {[_key:string]: string}, page: number) => {
  const url = `${API_BASE_URL}${API_URLS.MOVIE_LIST}`
  return await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': '7708459c0cmshe9f53d7a3724036p150772jsn2bd56d0891a5',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    },
    params: {
      ...query,
      page,
      limit: 12
    }
  })
}

export const searchMoviesAPI = async (title: string, page: number) => {
  const url = `${API_BASE_URL}${API_URLS.SEARCH_MOVIES.replace('{title}', title)}`
  return await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': '7708459c0cmshe9f53d7a3724036p150772jsn2bd56d0891a5',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    },
    params: {
      exact: false,
      page,
      titleType: 'movie'
    }
  })
}