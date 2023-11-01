import Image from "next/image"
import { MovieDetailType } from "./types"
import Link from "next/link"

interface MovieDetailProps {
  movieDetail: MovieDetailType
}

const MovieDetail = ({
  movieDetail
}: MovieDetailProps) => {
  return(
    <div className="w-[80%] mx-auto">
      <Link href='/'>Back</Link>
      <div className="p-4 rounded bg-slate-100 text-black">
        <div className="mb-4">
          <p className="text-[48px] font-bold">{movieDetail.titleText.text}</p>
          <p>{`Rating: ${movieDetail.ratingsSummary.aggregateRating} (${movieDetail.ratingsSummary.voteCount} votes)`}</p>
          <div className="flex gap-4">
            {
              movieDetail.genres.genres.map(item => (
                <div key={item.id} className="bg-green-600 text-white px-[4px] py-[2px] rounded">
                  {item.text}
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex gap-8">
          <div className="w-[30%] max-h-[300px]">
            <Image
              alt={movieDetail?.primaryImage?.caption?.plainText ?? 'no image'}
              src={movieDetail?.primaryImage?.url ?? '/no-image.png'}
              width={200}
              height={300}
            />
          </div>
          <div>
            <p>{movieDetail.plot && movieDetail.plot.plotText.plainText}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail