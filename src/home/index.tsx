import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { moviesAction, moviesSelector } from "@/redux/slice/movie.slice"
import Input from "@/shared/components/input"
import MovieCard from "@/shared/components/movie-card"
import Toggle from "@/shared/components/toggle"
import { useRouter } from "next/router"
import { useCallback, useEffect, useRef, useState } from 'react'

interface HomePageProps {
  initialMoviesData: MoviesAPIResponse
}

const HomePage = ({ initialMoviesData }: HomePageProps) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const movies = useAppSelector(moviesSelector)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    if (Object.keys(initialMoviesData).length > 0) {
      dispatch(moviesAction.setMovies(initialMoviesData))
    } else {
      dispatch(moviesAction.getMovies({ query: {}, page }))
    }
  }, [initialMoviesData])

  useEffect(() => {
    if (!!search) {
      const getData = setTimeout(() => {
        dispatch(moviesAction.searchMovies({
          title: search,
          page: 1
        }))
      }, 3000)
      return () => clearTimeout(getData)
    } else {
      dispatch(moviesAction.getMovies({query: {}, page}))
    }
  }, [search, page])

  useEffect(() => {
    const body = document.querySelector('body')
    if (body) {
      if (checked) {
        body.classList.add('dark')
      } else {
        body.classList.remove('dark')
      }
    }
  }, [checked])

  const observer = useRef();
  const lastElement = useCallback(node => {
    if (observer.current) {
        observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting && !!movies.next){
          setPage((prevState) => prevState + 1)
        }
    })

    if (node) {
        observer.current.observe(node);
    }
  }, [movies])
  

  const handleChangeInput = (event: React.ChangeEvent) => {
    const { value } = event.target as HTMLInputElement
    setSearch(() => value)
    dispatch(moviesAction.resetMovies())
    setPage(1)
  }

  const handleToggleChange = (value: boolean) => {
    setChecked(() => value)
  }

  return(
    <div className="w-[80%] mx-auto">
      <div className="w-full flex justify-between">
        <div className="pb-8 w-1/2">
          <Input
            id="search"
            name="search"
            onChange={handleChangeInput}
            placeholder="Search Movies"
            value={search}
          />
        </div>
        <Toggle label="Dark mode" onChange={handleToggleChange} isChecked={checked}/>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {
          movies.results.map((item, index) => {
            return(
              <MovieCard
                ref={index === movies.results.length - 1 ? lastElement : null}
                id={item.id}
                image={{
                  alt: item.primaryImage ? item.primaryImage.caption.plainText : 'no image',
                  src: item.primaryImage ? item.primaryImage.url : '/no-image.png',
                  width: item.primaryImage ? item.primaryImage.width : 200,
                  height: item.primaryImage ? item.primaryImage.height : 300,
                }}
                onClick={() => router.push({ pathname: `/${item.id}` })}
              >
                <p className="text-black text-sm font-bold text-center truncate">{item.titleText.text}</p>
              </MovieCard>
            )
          })
        }
      </div>
    </div>
  )
}

export default HomePage