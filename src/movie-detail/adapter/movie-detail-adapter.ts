import { NextPageContext } from "next";
import { getMovieDetailApi } from "../api/movie-detaill.api";


const getMovieDetailAdapter = async (id: string) => {
  try {
    const response = await getMovieDetailApi(id)
    return response.data.results
  } catch (error) {
    return {}
  }
}

export const getMovieDetailServerSideProps = async (crx: NextPageContext) => {
  const { params } = crx
  const movieDetail = await getMovieDetailAdapter(params.id)
  return {
    props: {
      movieDetail
    }
  }
}