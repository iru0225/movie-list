import { store } from '@/redux/store'
// import Loader from '@/shared/components/loader'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
        {/* <Loader isLoading={loading} /> */}
        <div className='pt-8'>
          <Component {...pageProps} />
        </div>
    </Provider>
  )
}
