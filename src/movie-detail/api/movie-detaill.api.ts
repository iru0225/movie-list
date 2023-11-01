import { API_BASE_URL, API_URLS } from "@/shared/constants";
import axios from "axios";

export const getMovieDetailApi = async (id: string) => {
  const url = `${API_BASE_URL}${API_URLS.MOVIE_DETAIL.replace('{id}', id)}`
  return await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': '7708459c0cmshe9f53d7a3724036p150772jsn2bd56d0891a5',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    },
    params: {
     info: 'base_info'
    }
  })
}