import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { getMoviesAdapter, searchMoviesAdapter } from '@/home/adapter/home.adapter'

const getMovies = createAsyncThunk<any, { query: {[_key: string]: string}, page: number }>(
  '/movies',
  async ({ query, page }) => {
    return await getMoviesAdapter(query, page)
  }
)

const searchMovies = createAsyncThunk<any, { title: string, page: number }>(
  '/movies/search',
  async ({ title, page }) => {
    return await searchMoviesAdapter(title, page)
  }
)

interface MoviesState {
  page: string
  next: string
  entries: number
  results: {
    [_key: string]: any
  }[]
}

const initialState = {
  page: '',
  next: '',
  entries: 0,
  results: []
} as MoviesState

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      const { results = [], page = '', next = '', entries = 0} = action.payload || {}
      state.results = results
      state.page = page
      state.entries = entries
      state.next = next
    },
    resetMovies: (state) => {
      state.results = []
      state.page = ''
      state.entries = 0
      state.next = ''
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, action) => {
      if (state.page === action.payload.page) {
        return {
          ...state,
          ...action.payload
        }
      }
      return ({
        ...state,
        ...action.payload,
        results: [
          ...state.results,
          ...action.payload.results
        ]
      })
    }),
    builder.addCase(searchMovies.fulfilled, (state, action) => {
      if (state.page === action.payload.page) {
        return {
          ...state,
          ...action.payload
        }
      }
      return ({
        ...state,
        ...action.payload,
        results: [
          ...state.results,
          ...action.payload.results
        ]
      })
    })
  }
})

const { actions } = moviesSlice
export const moviesAction = {
  ...actions,
  getMovies,
  searchMovies
}
export const moviesSelector = ({ movies }: RootState): RootState => movies