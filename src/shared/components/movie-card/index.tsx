import { forwardRef } from 'react'
import { CardContainer } from "./styles"
import Image from 'next/image'

interface MovieCardProps {
  id: string
  image: {
    alt: string
    src: string
    width: number
    height: number
  }
  onClick: () => void
  children: React.ReactNode | string
}

const MovieCard = forwardRef<HTMLButtonElement, MovieCardProps>(({
  id, image, onClick, children
}: MovieCardProps, ref) => {
  return(
    <CardContainer
      key={id}
      ref={ref}
      onClick={onClick}
    >
      <Image
        alt={image.alt}
        src={image.src}
        width={image.width}
        height={image.height}
      />
      <div className='p-2'>
        {children}
      </div>
    </CardContainer>
  )
})

export default MovieCard