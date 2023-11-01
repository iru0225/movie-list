import HomePage from '@/home'
import { getHomeServerSide } from '@/home/adapter/home.adapter'

export const getServerSideProps = async () => await getHomeServerSide()
export default HomePage