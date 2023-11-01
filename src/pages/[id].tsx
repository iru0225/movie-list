import MovieDetail from '@/movie-detail'
import { getMovieDetailServerSideProps } from '@/movie-detail/adapter/movie-detail-adapter'
import { NextPageContext } from 'next'

export const getServerSideProps = async (ctx: NextPageContext) => {
  return await getMovieDetailServerSideProps(ctx)
}
export default MovieDetail